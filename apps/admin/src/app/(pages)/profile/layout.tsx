import React from "react";
import { DashboardPage} from "@portfolio/ui";

export default async function ProfileLayout({ children }: { children: React.ReactNode }) {
    return <DashboardPage
        title="Profile"
        navigation={[
            { label: "Info", path: "/profile" },
            { label: "Contact", path: "/profile/contact" },
            { label: "Settings", path: "/profile/settings" },
        ]}
    >
        {children}
    </DashboardPage>
}