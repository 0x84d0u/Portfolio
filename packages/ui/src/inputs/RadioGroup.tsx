"use client"

import * as React from "react"
import { cn } from "../cn"

export type RadioOption = {
  label: React.ReactNode
  value: string
}

export type RadioGroupProps = {
  name: string
  options: RadioOption[]
  defaultValue?: string
  disabled?: boolean
  className?: string
}

export const RadioGroup = ({
  name,
  options,
  defaultValue,
  disabled,
  className,
}: RadioGroupProps) => {
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
            type="radio"
            name={name}
            value={option.value}
            defaultChecked={option.value === defaultValue}
            disabled={disabled}
            className="h-4 w-4 text-primary focus:ring-ring"
          />
          {option.label}
        </label>
      ))}
    </div>
  )
}
