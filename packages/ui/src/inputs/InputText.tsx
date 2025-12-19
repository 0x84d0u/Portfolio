import * as React from "react"
import { Icon, type IconName } from "../foundation/Icon"
import { cn } from "../cn"

export type InputTextProps =
  React.InputHTMLAttributes<HTMLInputElement> & {
    start?: React.ReactNode
    end?: React.ReactNode
    icon?: IconName
  }

export const InputText = React.forwardRef<
  HTMLInputElement,
  InputTextProps
>(function InputText(
  {
    className,
    start,
    end,
    icon,
    type = "text",
    disabled,
    ...rest
  },
  ref
) {
  return (
    <div
      className={cn(
        "flex w-full items-center gap-2 rounded-md border border-border/50",
        "h-9 bg-background px-2 text-sm",
        "focus-within:ring-2 focus-within:ring-ring",
        disabled && "opacity-50 cursor-not-allowed",
        className
      )}
    >
      {icon && (
        <Icon
          name={icon}
          size={16}
          className="shrink-0 text-muted-foreground"
        />
      )}

      {start && (
        <span className="shrink-0 text-muted-foreground">
          {start}
        </span>
      )}

      <input
        ref={ref}
        type={type}
        disabled={disabled}
        className={cn(
          "flex-1 bg-transparent outline-none",
          "placeholder:text-muted-foreground"
        )}
        {...rest}
      />

      {end && <div className="shrink-0">{end}</div>}
    </div>
  )
})
