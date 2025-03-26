import {NextResponse} from "next/server";
import type {NextRequest} from "next/server";
import {auth} from "@/auth"

const loggedRoutes = ["/profile"]

const notLoggedRoutes = ["/login"]
export const config = {
    matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
}
export default async function Middleware(request: NextRequest) {
    const session = await auth()
    const {pathname} = request.nextUrl

    const isLoggedRoute = loggedRoutes.some((route) =>
        pathname.startsWith(route)
    )
    if (isLoggedRoute && !session) {
        return NextResponse.redirect(new URL('/', request.url))
    }

    console.log(pathname)
    const isNotLoggedRoute = notLoggedRoutes.some((route) =>
        pathname.startsWith(route)
    )
    if (isNotLoggedRoute && session) {
        return NextResponse.redirect(new URL('/', request.url))
    }

    return NextResponse.next()
}