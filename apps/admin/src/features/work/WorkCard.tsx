import React from "react";
import { WorkForm, Work } from "./WorkForm";
import { Icon } from "@portfolio/ui";
import Link from "next/link";

export type WorkCardProps = {
    data?: Work;
};
const work: Work = {
    title: "Frontend Developer",
    description: "Developed UI components for admin dashboard",
    roles: ["React", "Next.js", "TypeScript"],
    period: "Jan 2024 - Dec 2024",
    organisation: "Acme Corp",
    address: "Casablanca, Morocco",
    location: "wfh",
    contract: "full-time",
};

export const WorkCard = ({ data = work }: WorkCardProps) => {
    if (!data) return null;
    return <div className="bg-slate-50 border border-border p-3 rounded-md ">

        <div className="flex justify-between">
            <div> {data.title}</div>
            <Link href={`/work/{}`}>
                <Icon size={16} name="ArrowRight" />
            </Link>
        </div>
    </div>

};
