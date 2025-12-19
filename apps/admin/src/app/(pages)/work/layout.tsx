import React from "react";
import { DashboardPage} from "@portfolio/ui";

export default async function ProfileLayout({ children }: { children: React.ReactNode }) {
    return <DashboardPage
        title={"Work"}
        subtitle={{
            "/work" : "Work history",
            "/work/add" : "Add work experience"
        }}
        
        navigation={[
            { label: "History", path: "/work" },
            { label: "Add", path: "/work/add", icon: "Plus" },
        ]}
    >
        {children}
    </DashboardPage>
}