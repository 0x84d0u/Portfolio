import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function proxy(req: NextRequest) {
    const { pathname } = req.nextUrl

    // Allow login page
    if (pathname === "/login") {
        return NextResponse.next()
    }

    // Read cookie
    const token = req.cookies.get("admin_session")?.value

    // Protect everything else
    if (token !== process.env.ADMIN_SESSION_TOKEN) {
        const loginUrl = req.nextUrl.clone()
        loginUrl.pathname = "/login"
        return NextResponse.redirect(loginUrl)
    }

    return NextResponse.next()
}

export const config = {
    matcher: [
        "/((?!login|api|_next|favicon.ico).*)",
    ],
}
