"use client"

import * as React from "react"
import { cn } from "../cn"

export type CheckboxProps =
  React.InputHTMLAttributes<HTMLInputElement>

export const Checkbox = React.forwardRef<
  HTMLInputElement,
  CheckboxProps
>(function Checkbox({ className, children, ...rest }, ref) {
  return (
    <label
      className={cn(
        "inline-flex items-center gap-2 text-sm",
        className
      )}
    >
      <input
        ref={ref}
        type="checkbox"
        className="h-4 w-4 rounded border-border text-primary focus:ring-ring"
        {...rest}
      />
      {children}
    </label>
  )
})
