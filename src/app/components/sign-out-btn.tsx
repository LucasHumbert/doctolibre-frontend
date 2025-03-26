"use client";

import {logout} from "@/app/lib/actions/auth";

export default function SignOutBtn() {
    return <button onClick={() => logout()}>Sign out</button>
}