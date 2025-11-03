import { NextResponse } from "next/server";
import redis from "@/app/lib/redis";

export async function GET() {
  try {
    await redis.set("health-check", "✅ Redis connected!", "EX", 10);
    const value = await redis.get("health-check");

    return NextResponse.json({ message: value });
  } catch (error: any) {
    console.error("Redis test failed:", error.message);
    return NextResponse.json({ error: "Redis connection failed" }, { status: 500 });
  }
}
