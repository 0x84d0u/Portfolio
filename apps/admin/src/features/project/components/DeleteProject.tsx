"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Modal } from "@portfolio/ui";
import { deleteProject } from "../actions";

export const DeleteProject = ({ id }: { id: string }) => {
    const router = useRouter();
    const [isOpen, setOpen] = useState(false)

    return <>
        <button
            className="bg-slate-900 text-white text-sm font-semibold px-2.5 py-1.5 rounded-md"
            onClick={() => setOpen(true)}
        >
            Delete
        </button>
        <Modal
            open={isOpen}
            onOpenChange={setOpen}
            title="Delete project"
            footer={
                <>
                    <button
                        className="border px-3 py-1"
                        onClick={() => setOpen(false)}
                    >
                        Cancel
                    </button>
                    <button
                        className="border border-red-500 text-red-600 px-3 py-1"
                        onClick={async () => {
                            await deleteProject(id)
                            setOpen(false);
                            router.refresh();
                        }}
                    >
                        Delete
                    </button>
                </>
            }
        >
            <p className="text-sm text-muted">
                Are you sure you want to delete ?
            </p>
        </Modal>

    </>
}