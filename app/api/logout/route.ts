import { NextResponse } from "next/server";
import redis from "@/app/lib/redis";
import { error } from "console";

export async function POST(req:Request) {
   const authHeader = req.headers.get("authorization");

    if(!authHeader){
        return NextResponse.json(
            {error: "Unauthorized"},
            {status: 401}
        )
    }
    const token = authHeader.split(" ")[1];

    await redis.del(`profile:${token}`);
    console.log("Cache cleared for the user", token);
    return NextResponse.json(
        {message: " Logout done successfully"}
    )
}