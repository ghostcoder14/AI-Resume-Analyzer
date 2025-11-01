import {  PrismaClient } from "@prisma/client";
import { hash } from "bcryptjs";
import { NextResponse } from "next/server";
import { RegisterSchema } from "@/app/lib/validations/auth";
import z from "zod";
import { error } from "console";

const prisma = new PrismaClient();


export async function POST(req:Request) {
    try{
        const body = await req.json();

        const parsed = RegisterSchema.safeParse(body);
        if(!parsed.success){
            const errors = z.treeifyError(parsed.error);
            return NextResponse.json(
                {errors},
                {status: 400}
        );
        }

        const {name, email, password} = parsed.data ;
         const existing = await prisma.user.findUnique({
            where:{email},
         });

         if(existing){
            return NextResponse.json(
                {error: "User allready exists"},
                {status: 400}
            );
         }

         const hashedPassword = await hash(password, 10);

         const user = await prisma.user.create({
            data: {
                name,
                email,
                password: hashedPassword
            },
         });

         return NextResponse.json(
            {message: "User registered successdully", user},
            {status: 201}
         );

    }catch{
        console.error("Register Error:" , error);
        return NextResponse.json(
            {error: "Internal server error"},
            {status: 500}
        )
    }
}