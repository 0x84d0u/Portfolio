
import React from "react";
import Link from "next/link";
import { DataList } from "@portfolio/ui";
import { DeleteExperience } from "./DeleteExperience";
import { UpdateExperience } from "./UpdateExperience";
import { ExperienceModel } from "../types";

export type ReadExperienceProps = {
    data?: ExperienceModel;
};

export const ReadExperience = ({ data }: ReadExperienceProps) => {
    if (!data) return null;
    return <div className="bg-slate-50 border border-border p-3 rounded-md">
        <div className="flex justify-between items-center">
            <div className="font-medium">{data.title}</div>
            <div className="space-x-2">
                <DeleteExperience id={data.id} />
                <UpdateExperience data={data} />
                <Link className="border border-border px-2 py-1" href={`/work/${data.id}`} target="_blank" rel="noopener noreferrer" > View</Link>
            </div>
        </div>
        <div>
            <DataList data={data} />
        </div>
    </div>
};