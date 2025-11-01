import { PassThrough } from "stream";
import z, { email } from "zod";

export const RegisterSchema = z.object({
    name: z.string().min(3,"Name must be at least 2 characters long"),
    email: z.email("Inavlid email address"),
    password: z
               .string()
               .min(6,"Password must be at least 6 characters long")
               .regex(/[A-Z]/, "Must contain an uppercase letter")
               .regex(/[0-9]/, "Must contain a number")
});


export const LoginSchema= z.object({
    email: z.email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters long")
});
