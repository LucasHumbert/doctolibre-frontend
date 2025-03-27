"use client";

import {logout} from "@/app/lib/actions/auth";

export default function SignOutBtn({ children }: { children: React.ReactNode}) {
    return <button
        onClick={() => logout()}
        className="cursor-pointer text-white bg-indigo-500 hover:bg-gray-900 font-medium rounded-lg text-sm px-5 py-2.5"
    >
        {children}
    </button>
}