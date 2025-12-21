"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Modal } from "@portfolio/ui";
import { ProjectForm } from "./ProjectForm";

export const CreateProject = () => {
    const router = useRouter();
    const [isOpen, setOpen] = useState(false)
    return <>
        <button
            className="bg-slate-900 text-white text-sm font-semibold px-2.5 py-1.5 rounded-md"
            onClick={() => setOpen(true)}
        >
            {`Create project`}
        </button>
        <Modal
            open={isOpen}
            onOpenChange={setOpen}
            title={`Create project`}
            className="max-w-lg"
        >
            <ProjectForm
                mode="create"
                onSuccess={() => {
                    setOpen(false)
                    router.refresh();
                }}
            />
        </Modal>
    </>


}