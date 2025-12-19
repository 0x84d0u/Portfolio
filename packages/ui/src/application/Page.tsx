
// import { Navigation, NavigationItem } from "./Navigation"
import { cn } from "../cn"
import { Container } from "../foundation/Container"
import { Heading, Text } from "../foundation/Typograpghy"
import { Section } from "./Section"

type PageProps = {
    children?: React.ReactNode
}

export const Page = ({
    children,
}: PageProps) => {
    return <div className={cn("flex-1 flex flex-col")}>
        {children}
    </div>
}

// ---------- Page ---------- //

export type PageHeaderProps = {
    negativeSapceTop?: number
    title?: string
    description?: string
}

export const PageHeader = ({
    negativeSapceTop = 0,
    title,
    description
}: PageHeaderProps) => {
    const showHeader = title || description
    return <Section className="bg-slate-100 py-6">
        {negativeSapceTop > 0 && <div style={{ height: negativeSapceTop }}> </div>}
        {showHeader && <div className="">
            {title && <Heading size="page">{title}</Heading>}
            {description && <Text>{description}</Text>}
            {/* {nav && <Navigation items={nav} />} */}
        </div>}
    </Section>
}