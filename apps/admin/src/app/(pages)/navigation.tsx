"use client";

import { cn, NavigationItem } from "@portfolio/ui";
import Link from "next/link";
import { usePathname } from "next/navigation";


const primaryNavigation: NavigationItem[] = [
    { label: "Home", path: "/" },
    { label: "Profile", path: "/profile" },
    { label: "Experience", path: "/experience" },
    { label: "Projects", path: "/projects" },
]

export const PagesNavigation = () => {
    const pathname = usePathname();
    return <div className="flex flex-col">
        {primaryNavigation.map((item, key) => {
            const { label, path } = item
            const isActive = path === '/' ? pathname === path : pathname.includes(path);
            return <Link
                key={key}
                href={path}
                className={cn(
                    "transition-all",
                    " p-2 rounded-md text-sm font-semibold",
                    isActive ? "bg-accent text-white" : "hover:bg-slate-50"
                )}
            >{label}</Link>
        })}
    </div>
}

