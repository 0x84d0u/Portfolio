import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function proxy(req: NextRequest) {

    console.log("Middleware")
    const token = req.cookies.get("admin_session")?.value


    const isAdminRoute = req.nextUrl.pathname.startsWith("/")
    const isLoginRoute = req.nextUrl.pathname === "/login"

    if (isAdminRoute && !isLoginRoute) {
        if (token !== process.env.ADMIN_SESSION_TOKEN) {
            return NextResponse.redirect(new URL("/login", req.url))
        }
    }

    return NextResponse.next()
}

export const config = {
    matcher: ["/:path*"],
}
