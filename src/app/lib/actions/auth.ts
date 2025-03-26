"use server"

import {auth, signIn, signOut} from "@/auth";

export const login = async () => {
    await signIn('credentials', { redirectTo: '/'})
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

    console.log(result)
    if (result?.success) {
        await signOut({ redirectTo: '/'})
    } else {
        // TODO throw error
        console.log('error')
    }
}