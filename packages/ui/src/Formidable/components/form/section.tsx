import React from "react"
import { cn } from "../../../cn";

export type FormSectionProps = {
    children?: React.ReactNode
    className?: string;
    title?: string
    description?: string
}

export const FormSection = ({
    title,
    description,
    children,
    className
}: FormSectionProps) => {
    return <section className={cn("py-3", className)}>
        {(title || description) && <div className=" mb-8">
            {title && <h3 className="text-xl text-accent font-semibold">{title}</h3>}
            {description && <h3>{description}</h3>}
        </div>}
        <div className="space-y-3">
            {children}
        </div>
    </section>
}