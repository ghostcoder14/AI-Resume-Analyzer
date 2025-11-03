import { NextResponse } from "next/server";
import jwt from 'jsonwebtoken'
import { error } from "console";

export async function verifyToken(req:Request) {
    try {
        const authHeader  = req.headers.get("authorization");
        if(!authHeader || !authHeader.startsWith("Bearer ")){
            return NextResponse.json(
                {error:"Unauthorized user - Missing the token"},
                {status: 401}
            )
        }
        const token = authHeader.split(" ")[1];
        const decode = jwt.verify(token, process.env.JWT_SECRET!);
        const userId = (decode as any).sub || (decode as any).id || (decode as any).userId || (decode as any).email ;

        if(!userId){
            return NextResponse.json(
                {error: "Invalid token: missing user identifier"},
                {status: 401},
            )
        }
        return {userId, decode, token};
     } catch (error: any) {
        console.error("JWT verification failed:", error.message);
    return NextResponse.json({ error: "Invalid or expired token" }, { status: 401 });
    }
}