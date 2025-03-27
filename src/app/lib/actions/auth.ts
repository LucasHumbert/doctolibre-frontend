"use server"

import {auth, signIn, signOut} from "@/auth";
import {redirect} from "next/navigation";
import {FormState, RegisterFormSchema} from "@/app/lib/validators/auth";

export const login = async (formData: FormData) => {
    formData.append('redirectTo', '/');
    await signIn('credentials', formData)
}

export const logout = async () => {
    const session = await auth()

    const res = await fetch(`${process.env.BACKEND_URL}/user/logout`, {
        method: "POST",
        headers: {
            Authorization: `Bearer ${session?.access_token}`
        }
    })

    const result = await res.json()

    if (result?.success) {
        await signOut({ redirectTo: '/'})
    } else {
        // TODO throw error
        console.log('error')
    }
}

export const register = async (state: FormState, formData: FormData) => {
    // Validate form fields
    const validatedFields = RegisterFormSchema.safeParse({
        firstname: formData.get('firstname'),
        lastname: formData.get('lastname'),
        email: formData.get('email'),
        password: formData.get('password'),
        confirm_password: formData.get('confirm_password'),
    })

    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            values: Object.fromEntries(formData.entries())
        }
    }

    let redirectToLogin = false
    try {
        await fetch(`${process.env.BACKEND_URL}/user/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                firstName: formData.get('firstname'),
                lastName: formData.get('lastname'),
                email: formData.get('email'),
                password: formData.get('password'),
            })
        })

        redirectToLogin = true
    } catch (e) {
        console.log(e)
    } finally {
        if (redirectToLogin) {
            redirect('/login')
        }
    }

}