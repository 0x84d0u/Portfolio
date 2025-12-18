import { cn } from "../cn"
import { Container } from "../foundation/Container"
import { Heading, Text } from "../foundation/Typograpghy"


type SectionProps = {
    title?: string
    description?: string
    children?: React.ReactNode,
    isAlt?: boolean
    isBordered?: boolean

    color?: 'white' 
}

export const Section = ({
    title,
    description,
    children,
    isAlt,
    color,
    isBordered,
}: SectionProps) => {
    const showHeader = title || description
    return <section className={cn(
        "py-16",
        isBordered && "border-t border-border",
        color === 'white' && 'bg-white'
        // isAlt ? "bg-slate-50" : "bg-white"
    )}>
        {showHeader && <div className="mb-12">
            <Container>
                {title && <Heading size="section">{title}</Heading>}
                {description && <Text>{description}</Text>}
            </Container>
        </div>}
        <Container className="space-y-6">
            {children}
        </Container>
    </section>
}
