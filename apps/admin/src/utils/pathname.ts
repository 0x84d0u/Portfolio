"use server";

import { headers } from "next/headers";

export const getPathname = async (): Promise<string> => {
    const h = await headers();
    const pathname = h.get("x-pathname")
    return pathname || ""
}