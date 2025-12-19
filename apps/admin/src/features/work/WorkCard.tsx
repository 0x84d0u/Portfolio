import React from "react";
import Link from "next/link";
import { Icon } from "@portfolio/ui";
import { Work } from "./types";

export type WorkCardProps = {
    data?: Work;
};

export const WorkCard = ({ data }: WorkCardProps) => {
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
