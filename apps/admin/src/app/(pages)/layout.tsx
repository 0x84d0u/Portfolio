import { DashboardLayout } from "@portfolio/ui";
import React from "react";
import { PagesNavigation } from "./navigation";

export default async function PagesLayout({ children }: { children: React.ReactNode }) {
    return <DashboardLayout
        sidebar={<PagesNavigation />}
    >
        {children}
    </DashboardLayout>
}