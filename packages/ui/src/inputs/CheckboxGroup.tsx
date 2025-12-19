"use client"

import * as React from "react"
import { cn } from "../cn"

export type CheckboxOption = {
  label: React.ReactNode
  value: string
}

export type CheckboxGroupProps = {
  name: string
  options: CheckboxOption[]
  defaultValue?: string[]
  disabled?: boolean
  className?: string
}

export const CheckboxGroup = ({
  name,
  options,
  defaultValue = [],
  disabled,
  className,
}: CheckboxGroupProps) => {
  return (
    <div className={cn("flex flex-col gap-2", className)}>
      {options.map(option => (
        <label
          key={option.value}
          className={cn(
            "flex items-center gap-2 text-sm",
            disabled && "opacity-50 cursor-not-allowed"
          )}
        >
          <input
            type="checkbox"
            name={name}
            value={option.value}
            defaultChecked={defaultValue.includes(option.value)}
            disabled={disabled}
            className="h-4 w-4 rounded border-border text-primary focus:ring-ring"
          />
          {option.label}
        </label>
      ))}
    </div>
  )
}
