"use client";

import { usePathname } from "next/navigation";
import { Text } from "../foundation/Typograpghy"
import { Section } from "./Section"
import { NavigationItem } from "./Navigation";
import Link from "next/link";
import { cn } from "../cn";

type DashboardPageProps = {
    children?: React.ReactNode
    title?: Record<string, string> | string
    subtitle?: Record<string, string> | string
    navigation?: NavigationItem[]
}

export const DashboardPage = ({
    children,
    title,
    subtitle,
    navigation,
}: DashboardPageProps) => {
    const pathname = usePathname();

    const showHeader = !!title || !!subtitle || !!navigation

    const resolveText = (value : Record<string, string> | string) =>
        typeof value === "string"
            ? value
            : value && pathname in value
                ? value[pathname]
                : null;


    const renderNavigation = () => {
        if (!navigation) return null;
        return <div className="flex items-center justify-start">
            {navigation.map((item, key) => {
                const { label, path, icon } = item
                const isActive = pathname === path;
                return <Link
                    key={key}
                    href={path}
                    className={cn(
                        "transition-all text-muted h-9",
                        "font-semibold",
                        "flex items-center border-b-2 border-transparent px-4",
                        isActive ? "text-accent border-accent" : "hover:text-heading"
                    )}
                >
                    {/* {icon && <Icon name={icon} size={16} className="opacity-50 mr-1" />} */}
                    {label}
                </Link>
            })}
        </div>
    }

    return <main className="flex-1 flex flex-col">
        <div className="bg-slate-50 h-16 " > </div>
        {showHeader && <Section className="bg-slate-50 p-0">
            <div className="flex items-center gap-2">
                {title && <Text as="h1">{resolveText(title)}</Text>}
                {subtitle && <Text as="p">— {resolveText(subtitle)}</Text>}
            </div>
            {renderNavigation()}
        </Section>}
        {children}
    </main>
}