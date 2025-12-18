"use server";

import { cookies } from "next/headers";


export const login = async (
    email: string,
    password: string
) => {
    const isMatch = email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD;

    if (!isMatch) return {
        error: "Invalid credentials"
    }

    const ck = await cookies();

    ck.set("admin_session", process.env.ADMIN_SESSION_TOKEN!, {
        httpOnly: true,
        sameSite: "strict",
        secure: process.env.NODE_ENV === "production",
        path: "/",
    })

    return {
        success: true
    }

}

export const logout = async () => {

}
