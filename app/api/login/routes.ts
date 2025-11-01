import { PrismaClient } from "@prisma/client";
import {z} from "zod";
import { NextResponse } from "next/server";
import { compare, compareSync } from "bcryptjs";
import { LoginSchema } from "@/app/lib/validations/auth";

const prisma = new PrismaClient();

export async function POST(req: Request) {
    try {
         const body = await req.json();

    const parsed = LoginSchema.safeParse(body);
     if(!parsed.success){
        const error = z.treeifyError(parsed.error);
        return NextResponse.json(
            {error: "Invlid credentials"},
            {status: 401}
        )
     }

     const {email, password}  = parsed.data

     const user = await prisma.user.findUnique({
        where: {email},
     })

     if(!user || !user.password) {
        return NextResponse.json(
            {error: "Invalid credentials"},
            {status: 401}
    )};

    const isValid = await compare(password, user.password);
    if (!isValid) {
        return NextResponse.json(
            {error: "Inavlid credentials"},
            {status:401}
        )
    }
    
    return NextResponse.json(
        {message: "Login successfull",
            user: {
                id: user.id,
                name: user.name,
                email: user.email
            },
        },
        {status:200}
    )
    
    } catch (error) {
        console.error(error)
        return NextResponse.json(
            {error: "Internal server error"},
            {status:500},
        )
    }

}