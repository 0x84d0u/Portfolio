import { cn, Icon } from "@portfolio/ui";
import { FieldWrapperProps } from "../types";

export const FieldWrapper = ({
    icon,
    start,
    end,
    isDisabled,
    className,
    children,
    layout,
}: FieldWrapperProps) => {
    return (
        <div
            className={cn(
                isDisabled && "opacity-50 cursor-not-allowed",
                ['textarea', "input"].includes(layout) && 'bg-white rounded-md border border-border/50 focus-within:ring-2 focus-within:ring-accent',
                // Content
                "flex w-full gap-2 text-sm ",
                ["textarea"].includes(layout) && "p-2 resize-none",
                ["input"].includes(layout) && "h-9 items-center px-2",
                className
            )}
        >
            {icon && <Icon name={icon} size={16} className="shrink-0 text-muted-foreground" />}
            {start && <span className="shrink-0 text-muted-foreground">{start}</span>}
            {children}
            {end && <div className="shrink-0">{end}</div>}
        </div>
    );
};
