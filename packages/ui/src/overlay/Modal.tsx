"use client";

import * as React from "react";
import { cn } from "../cn";

export type ModalProps = {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    children: React.ReactNode;
    title?: React.ReactNode;
    footer?: React.ReactNode;
    className?: string;
};

export const Modal = ({
    open,
    onOpenChange,
    children,
    title,
    footer,
    className,
}: ModalProps) => {
    React.useEffect(() => {
        if (!open) return;

        const onEsc = (e: KeyboardEvent) => {
            if (e.key === "Escape") onOpenChange(false);
        };

        document.addEventListener("keydown", onEsc);
        document.body.style.overflow = "hidden";

        return () => {
            document.removeEventListener("keydown", onEsc);
            document.body.style.overflow = "";
        };
    }, [open, onOpenChange]);

    if (!open) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/40"
                onClick={() => onOpenChange(false)}
            />

            {/* Dialog */}
            <div
                className={cn(
                    "relative z-10 w-full max-w-[80svw]",
                    "max-h-[80svh]",
                    "flex flex-col",
                    "rounded-md bg-white border border-border shadow-lg",
                    className
                )}
            >
                {/* Header */}
                {title && (
                    <div className="shrink-0 border-b border-border bg-slate-100 p-4 text-lg font-semibold">
                        {title}
                    </div>
                )}

                {/* Scrollable content */}
                <div className="flex-1 overflow-y-auto p-4">
                    {children}
                </div>

                {/* Footer */}
                {footer && (
                    <div className="shrink-0 border-t border-border bg-slate-50 p-4">
                        {footer}
                    </div>
                )}
            </div>
        </div>
    );
};
