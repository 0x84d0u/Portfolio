"use client";
import React, { useState } from "react"
import Link from 'next/link'
import { cn } from "../cn";
import { Icon } from "../foundation/Icon";
import { Page } from "./Page";
import { Section } from "./Section";
import { Heading } from "../foundation/Typograpghy";
import { NavigationItem } from "./Navigation";

export type DashboardLayoutProps = {
    children?: React.ReactNode
    sidebar?: React.ReactNode
}

export const DashboardLayout = ({ children, sidebar }: DashboardLayoutProps) => {
    const [sidebarOpen, setSidebarOpen] = useState(false)

    return (
        <div className="flex min-h-svh bg-background text-foreground relative">
            <SidebarOverlay sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
            <Sidebar sidebarOpen={sidebarOpen}>{sidebar}</Sidebar>
            {/* Floating toggle button */}
            <SidebarToggle
                sidebarOpen={sidebarOpen}
                setSidebarOpen={setSidebarOpen}
            />

            {/* Main content */}
            <main className="flex-1 overflow-auto ">{children}</main>
        </div>
    )
}
// ---------- Sidebar ---------- //
type SidebarProps = {
    sidebarOpen: boolean
    children?: React.ReactNode
}

const Sidebar = ({ sidebarOpen, children }: SidebarProps) => {
    return <aside
        className={cn(
            "fixed z-50 inset-y-0 left-0 tablet:static",
            "bg-white border-r border-border",
            "w-64",
            "transform transition-transform duration-300 ease-in-out",
            sidebarOpen ? "translate-x-0" : "-translate-x-full",
            "tablet:translate-x-0  tablet:flex tablet:flex-col"
        )}
    >
        <div className="h-16 tablet:h-6" > </div>
        <div className="p-4">
            {children}
        </div>
    </aside>
}

// ---------- Toggle ---------- //

type SidebarToggleProps = {
    sidebarOpen: boolean
    setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const SidebarToggle = ({ sidebarOpen, setSidebarOpen }: SidebarToggleProps) => {
    return (
        <button
            className={cn(
                "tablet:hidden transition-transform hover:scale-105",
                "bg-white text-text rounded-full shadow-2xl border border-border",
                "fixed top-4 left-4 z-50",
                "p-2 "
            )}
            onClick={() => setSidebarOpen(!sidebarOpen)}
            aria-label="Toggle sidebar"
        >
            <Icon name="Menu" size={16} />
        </button>
    )
}

// ---------- Overlay ---------- //


type SidebarOverlayProps = {
    sidebarOpen: boolean
    setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const SidebarOverlay = ({ sidebarOpen, setSidebarOpen }: SidebarOverlayProps) => {
    return (
        <div
            className={cn(
                "fixed inset-0 bg-black/30 z-40 tablet:hidden transition-opacity",
                sidebarOpen ? "opacity-100 visible" : "opacity-0 invisible"
            )}
            onClick={() => setSidebarOpen(false)}
        />
    )
}


// ---------- Page ---------- //
type DashboardPageProps2 = {
    children?: React.ReactNode
    title?: string
    navigation?: React.ReactNode
}

export const DashboardPage2 = ({
    children,
    title,
    navigation,
}: DashboardPageProps2) => {

    const showHeader = !!title || !!navigation

    return <Page>
        <div className="bg-slate-50 h-16 tablet:h-6" > </div>
        {showHeader && <Section className="bg-slate-50 pt-0 pb-6">
            {title && <Heading size="page"> {title}</Heading>}
            {navigation}
        </Section>}
        {children}
    </Page>
}