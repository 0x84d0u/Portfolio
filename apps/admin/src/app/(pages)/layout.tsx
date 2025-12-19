import { DashboardLayout } from "@portfolio/ui";
import React from "react";
import { PrimaryNavigation } from "../../features/site/Nav";

export default async function PagesLayout({ children }: { children: React.ReactNode }) {
    return <DashboardLayout
        sidebar={<PrimaryNavigation />}
    >
        {children}
    </DashboardLayout>
}