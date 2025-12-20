"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Modal } from "@portfolio/ui";
import { ExperienceModel } from "../types";
import { ExperienceForm } from "./ExperienceForm";

export const UpdateExperience = ({
    data,
}: {
    data: ExperienceModel
}) => {
    const router = useRouter();
    const [isOpen, setOpen] = useState(false)

    return <>
        <button
            className="bg-slate-900 text-white text-sm font-semibold px-2.5 py-1.5 rounded-md"
            onClick={() => setOpen(true)}
        >
            Update
        </button>
        <Modal
            open={isOpen}
            onOpenChange={setOpen}
            title="Update work"
            className="max-w-lg"
        >
            <ExperienceForm
                type={data.type}
                mode="update"
                initialData={data}
                onSuccess={() => {
                    setOpen(false)
                    router.refresh();
                }}
            />
        </Modal>
    </>
}