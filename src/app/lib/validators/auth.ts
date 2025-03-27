import { z } from 'zod'

export const RegisterFormSchema = z.object({
    firstname: z
        .string()
        .min(2, { message: 'Name must be at least 2 characters long.' })
        .trim(),
    lastname: z
        .string()
        .min(2, { message: 'Name must be at least 2 characters long.' })
        .trim(),
    email: z.string().email({ message: 'Please enter a valid email.' }).trim(),
    password: z
        .string()
        .min(12, { message: 'Be at least 12 characters long' })
        .regex(/[a-zA-Z]/, { message: 'Contain at least one letter.' })
        .regex(/[0-9]/, { message: 'Contain at least one number.' })
        .regex(/[^a-zA-Z0-9]/, {
            message: 'Contain at least one special character.',
        })
        .trim(),
    confirm_password: z.string()
}).refine((data) => data.password === data.confirm_password, {
    message: "Passwords don't match",
    path: ["confirm_password"],
})

export type FormState =
    | {
    errors?: {
        firstname?: string[]
        lastname?: string[]
        email?: string[]
        password?: string[]
        confirm_password?: string[]
    }
    message?: string
} | undefined