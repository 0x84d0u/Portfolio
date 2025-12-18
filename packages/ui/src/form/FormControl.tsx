import { cn } from "../cn"
import { Text } from "../foundation/Typograpghy"

export type FormControlProps = {
    label?: string
    children?: React.ReactNode
    className?: string
}


export const FormControl = ({
    label,
    children,
    className
}: FormControlProps) => {
    return <div className="flex-1 flex flex-col gap-2">
        <Text as='label' size="small" bold color="heading">{label}</Text>
        <div className={cn("flex flex-col gap-4 flex-wrap", className)}>
            {children}
        </div>
    </div>
}