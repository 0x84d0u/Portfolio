import React from "react"
import { cn } from "../cn"
import { Container } from "../foundation/Container"


type SectionProps = React.ComponentProps<'section'> 

export const Section = ({
    children,
    className,
    ...rest
}: SectionProps) => {
    return <section className={cn(
        "py-12",
        className
    )}
        {...rest}
    >
        <Container className="space-y-6">
            {children}
        </Container>
    </section>
}
