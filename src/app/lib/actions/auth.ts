"use server"

import {signIn, signOut} from "@/auth";

export const login = async () => {
    await signIn('credentials', { redirectTo: '/'})
}

export const logout = async () => {
    // TODO call backend logout

    await signOut({ redirectTo: '/'})
}