'use client'

import Link from "next/link";
import {usePathname} from "next/navigation";

export default function LoggedBarMenuItem({ text, link } : { text: string, link: string }) {
    const pathName = usePathname();

    return <Link
        href={link}
        className={`
            mx-2 text-lg hover:text-blue-500 hover:underline
            ${pathName.startsWith(link) ? "underline" : ""}
        `}
    >
        { text }
    </Link>
}