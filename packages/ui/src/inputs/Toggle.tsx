"use client"

import * as React from "react"
import { cn } from "../cn"

export type ToggleProps =
  Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> & {
    label?: React.ReactNode
  }

export const Toggle = React.forwardRef<
  HTMLInputElement,
  ToggleProps
>(function Toggle(
  { className, label, disabled, defaultChecked, ...rest },
  ref
) {
  return (
    <label
      className={cn(
        "inline-flex items-center gap-2 select-none",
        disabled && "opacity-50 cursor-not-allowed",
        className
      )}
    >
      <input
        ref={ref}
        type="checkbox"
        className="peer sr-only"
        disabled={disabled}
        defaultChecked={defaultChecked}
        {...rest}
      />

      {/* Track */}
      <span
        className={cn(
          "relative inline-flex h-6 w-11 items-center rounded-full transition-colors",
          "bg-muted peer-checked:bg-primary",
          "peer-focus-visible:ring-2 peer-focus-visible:ring-ring"
        )}
      >
        {/* Thumb */}
        <span
          className={cn(
            "inline-block h-5 w-5 translate-x-1 rounded-full bg-background shadow transition-transform",
            "peer-checked:translate-x-5"
          )}
        />
      </span>

      {label && (
        <span className="text-sm text-foreground">
          {label}
        </span>
      )}
    </label>
  )
})
