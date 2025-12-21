"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Modal } from "@portfolio/ui";
import { ProjectModel } from "../types";
import { ProjectForm } from "./ProjectForm";

export const UpdateProject = ({
    data,
}: {
    data: ProjectModel
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
            <ProjectForm
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