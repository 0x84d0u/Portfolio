"use client"

import * as React from "react"
import { cn } from "../cn"

export type SelectProps =
  React.SelectHTMLAttributes<HTMLSelectElement>

export const Select = React.forwardRef<
  HTMLSelectElement,
  SelectProps
>(function Select({ className, children, ...rest }, ref) {
  return (
    <select
      ref={ref}
      className={cn(
        "h-9 w-full rounded-md border border-border/50 bg-background px-2 text-sm",
        "focus:outline-none focus:ring-2 focus:ring-ring",
        className
      )}
      {...rest}
    >
      {children}
    </select>
  )
})
