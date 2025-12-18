
// import { Navigation, NavigationItem } from "./Navigation"
import { cn } from "../cn"
import { Container } from "../foundation/Container"
import { Heading, Text } from "../foundation/Typograpghy"
import { Section } from "./Section"

type PageProps = {
    isAlt?: boolean

    title?: string
    description?: string
    children?: React.ReactNode
    // nav?: NavigationItem[]
    error?: string
}

export const Page = ({
    title,
    description,
    error,
    // nav,
    children,
    isAlt = true
}: PageProps) => {

    const roorCn = cn(
        "flex-1 flex flex-col", 
        // "border-t border-border",
        isAlt && 'bg-slate-50'
    )
    if (error) {
        return <div className={roorCn}>
            <Section>
                <Heading size="page" color="muted">{error}</Heading>
            </Section>
        </div>
    }

    // const showHeader = title || description || nav
    const showHeader = title || description 

    return <div className={roorCn}>
        {showHeader && <section className="py-6">
            <Container>
                {title && <Heading size="page">{title}</Heading>}
                {description && <Text>{description}</Text>}
                {/* {nav && <Navigation items={nav} />} */}
            </Container>
        </section>}
        <div className="">
            {children}
        </div>
    </div>
}