"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Modal } from "@portfolio/ui";
import { ExperienceForm } from "./ExperienceForm";
import { ExperienceType } from "../types";

export const CreateExperience = ({
    type,
}: {
    type: ExperienceType
}) => {
    const router = useRouter();
    const [isOpen, setOpen] = useState(false)
    const name = type
    return <>
        <button
            className="bg-slate-900 text-white text-sm font-semibold px-2.5 py-1.5 rounded-md"
            onClick={() => setOpen(true)}
        >
            {`Create ${name} experience`}
        </button>
        <Modal
            open={isOpen}
            onOpenChange={setOpen}
            title={`Create ${name} experience`}
            className="max-w-lg"
        >
            <ExperienceForm
                type={type}
                mode="create"
                onSuccess={() => {
                    setOpen(false)
                    router.refresh();
                }}
            />
        </Modal>
    </>


}