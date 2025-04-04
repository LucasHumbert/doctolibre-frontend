import {NextResponse} from "next/server";
import type {NextRequest} from "next/server";
import {auth} from "@/auth"

const onlyLoggedRoutes = ["/profile", "/home"]

const onlyNotLoggedRoutes = ["/login", "/register"]
export const config = {
    matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
}
export default async function Middleware(request: NextRequest) {
    const session = await auth()
    const {pathname} = request.nextUrl

    const isLoggedRoute = onlyLoggedRoutes.some((route) =>
        pathname.startsWith(route)
    )
    if (isLoggedRoute && !session) {
        return NextResponse.redirect(new URL('/login', request.url))
    }

    let isNotLoggedRoute = onlyNotLoggedRoutes.some((route) =>
        pathname.startsWith(route)
    )

    isNotLoggedRoute = pathname === '/' ? true : isNotLoggedRoute

    if (isNotLoggedRoute && session) {
        return NextResponse.redirect(new URL('/home', request.url))
    }

    return NextResponse.next()
}