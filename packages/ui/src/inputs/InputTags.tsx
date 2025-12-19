"use client"

import * as React from "react"
import { Icon, type IconName } from "../foundation/Icon"
import { cn } from "../cn"

export type InputTagsProps =
  Omit<React.HTMLAttributes<HTMLDivElement>, "onChange"> & {
    name: string
    defaultValue?: string[]
    placeholder?: string
    icon?: IconName
    disabled?: boolean
  }

export const InputTags = ({
  name,
  defaultValue = [],
  placeholder = "Add item and press Enter",
  icon,
  disabled,
  className,
  ...rest
}: InputTagsProps) => {
  const [tags, setTags] = React.useState<string[]>(defaultValue)
  const [input, setInput] = React.useState("")

  const addTag = (tag?: string) => {
    const cleaned = tag?.trim()
    if (!cleaned || tags.includes(cleaned)) return
    setTags(prev => [...prev, cleaned])
    setInput("")
  }

  const removeTag = (tag?: string) => {
    setTags(prev => prev.filter(t => t !== tag))
  }

  return (
    <div
      {...rest}
      className={cn(
        "flex min-h-9 flex-wrap items-center gap-1 rounded-md border border-border/50",
        "bg-background px-2 text-sm",
        "focus-within:ring-2 focus-within:ring-ring",
        disabled && "opacity-50 pointer-events-none",
        className
      )}
    >
      {icon && (
        <Icon
          name={icon}
          size={16}
          className="text-muted-foreground shrink-0"
        />
      )}

      {/* Hidden inputs → FormData.getAll(name) */}
      {tags.map(tag => (
        <input
          key={tag}
          type="hidden"
          name={name}
          value={tag}
        />
      ))}

      {tags.map(tag => (
        <span
          key={tag}
          className="flex items-center gap-1 rounded bg-muted px-2 py-0.5 text-xs"
        >
          {tag}
          <button
            type="button"
            onClick={() => removeTag(tag)}
            className="text-muted-foreground hover:text-foreground"
          >
            ×
          </button>
        </span>
      ))}

      <input
        value={input}
        onChange={e => setInput(e.target.value)}
        onKeyDown={e => {
          if (e.key === "Enter" || e.key === ",") {
            e.preventDefault()
            addTag(input)
          }
          if (e.key === "Backspace" && !input && tags.length) {
            removeTag(tags[tags.length - 1])
          }
        }}
        placeholder={tags.length === 0 ? placeholder : undefined}
        className="flex-1 min-w-[120px] bg-transparent outline-none placeholder:text-muted-foreground"
        disabled={disabled}
      />
    </div>
  )
}
