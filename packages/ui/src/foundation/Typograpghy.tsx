import React from "react"
import { cn } from "../cn"

// ---------- Tokens ---------- //

type Color = "heading" | "body" | "link" | "accent" | "muted"
type HeadingSize = 'page' | 'section' | 'title'
type TextSize = 'very-small' | 'small' | 'medium' | 'large'
type Family = "body" | "heading" | "code"

// ---------- Maps ---------- //

const colorMap: Record<Color, string> = {
    body: "text-text",
    heading: "text-heading",
    link: 'text-link',
    muted: "text-muted",
    accent: "text-accent",
}

const textSizeMap: Record<TextSize, string> = {
    large: "text-lg",
    medium: "text-base",
    small: "text-sm",
    "very-small": 'text-xs'
}

const familyMap: Record<Family, string> = {
    body: "font-body",
    heading: "font-heading",
    code: 'font-code',
}
// ---------- Display ---------- //

type DisplayProps = {
    as?: React.ElementType
    children?: React.ReactNode
    className?: string
    color?: Color
}

export const Display = ({
    as = 'h1',
    children,
    className,
    color = 'heading',
}: DisplayProps) => {
    const Comp: React.ElementType = as

    return <Comp className={cn(
        color && colorMap[color],
        className
    )}>
        {children}
    </Comp>
}

// ---------- Heading ---------- //

type HeadingProps = {
    as?: React.ElementType
    children?: React.ReactNode
    className?: string
    color?: Color
    size?: HeadingSize

}

export const Heading = ({
    as,
    children,
    className,
    color = 'heading',
    size = 'title',
}: HeadingProps) => {
    const Comp: React.ElementType = as ? as : size === 'page' ? 'h2' : size === 'section' ? 'h3' : 'h4'
    return <Comp className={cn(
        color && colorMap[color],
        className
    )}>
        {children}
    </Comp>
}

// ---------- Text  ---------- //

type TextProps = {
    as?: React.ElementType
    children?: React.ReactNode
    className?: string
    color?: Color
    size?: TextSize
    family?: Family
    bold?: boolean
}
export const Text = ({
    as = 'span',
    children,
    className,
    color,
    size,
    family,
    bold,
}: TextProps) => {
    const Comp: React.ElementType = as
    return <Comp className={cn(
        color && colorMap[color],
        size && textSizeMap[size],
        family && familyMap[family],
        bold && 'font-semibold',
        className
    )}>
        {children}
    </Comp>
}