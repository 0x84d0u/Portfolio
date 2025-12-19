import * as React from "react"
import { Icon, type IconName } from "../foundation/Icon"
import { cn } from "../cn"

export type InputParagraphProps =
    React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
        start?: React.ReactNode
        end?: React.ReactNode
        icon?: IconName
    }

export const InputParagraph = React.forwardRef<
    HTMLTextAreaElement,
    InputParagraphProps
>(function InputParagraph(
    { className, start, end, icon, disabled, rows = 3, ...rest },
    ref
) {
    return (
        <div
            className={cn(
                "flex w-full gap-2 rounded-md border border-border/50",
                "bg-background p-2 text-sm",
                "focus-within:ring-2 focus-within:ring-ring",
                disabled && "opacity-50 cursor-not-allowed",
                className
            )}
        >
            {icon && (
                <Icon
                    name={icon}
                    size={16}
                    className="mt-1 shrink-0 text-muted-foreground"
                />
            )}

            {start && (
                <span className="mt-1 shrink-0 text-muted-foreground">
                    {start}
                </span>
            )}

            <textarea
                ref={ref}
                rows={rows}
                disabled={disabled}
                className={cn(
                    "flex-1 resize-none bg-transparent outline-none",
                    "placeholder:text-muted-foreground"
                )}
                {...rest}
            />

            {end && <div className="mt-1 shrink-0">{end}</div>}
        </div>
    )
})
