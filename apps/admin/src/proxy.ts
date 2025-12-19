import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function proxy(req: NextRequest) {
    const { pathname } = req.nextUrl

    const res = NextResponse.next()

    if (pathname === "/login") return res

    const token = req.cookies.get("admin_session")?.value

    // Protect everything else
    if (token !== process.env.ADMIN_SESSION_TOKEN) {
        const loginUrl = req.nextUrl.clone()
        loginUrl.pathname = "/login"
        return NextResponse.redirect(loginUrl)
    }

    res.headers.set("x-pathname", req.nextUrl.pathname)
    return res
}

export const config = {
    matcher: [
        "/((?!login|api|_next|favicon.ico).*)",
    ],
}
