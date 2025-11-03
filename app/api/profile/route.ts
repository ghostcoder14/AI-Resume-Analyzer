import { NextResponse } from "next/server";
import prisma from "@/app/lib/prisma";
import redis from "@/app/lib/redis";
import { verifyToken } from "@/app/middleware/verifyToken";


export async function GET(req: Request) {
  try {
    
   
    const verified = await verifyToken(req);

    if (verified instanceof NextResponse) {
      return verified;
    }

    const { userId } = verified; 

    const cacheKey = `profile:${userId}`;
    const cachedProfile = await redis.get(cacheKey);
    
    if (cachedProfile) {
      console.log("Serving from cache");
      return NextResponse.json(JSON.parse(cachedProfile));
    }

    const user = await prisma.user.findUnique({
      where: { id: userId }, 
      select: {
        id: true,
        name: true,
        email: true,
      },
    });

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    await redis.set(cacheKey, JSON.stringify(user), "EX", 60 * 5);

    console.log("Fetched from DB & cached");
    return NextResponse.json(user);

  } catch (err: any) {
    console.error("Profile fetch error:", err.message);
   
    return NextResponse.json({ error: "Failed to retrieve user profile." }, { status: 500 });
  }
}
