import { cn } from "../cn"
import { Text } from "../foundation/Typograpghy"

export type FormControlProps = {
    label?: string
    children?: React.ReactNode
    className?: string
    error?: string[]
}


export const FormControl = ({
    label,
    children,
    error,
    className
}: FormControlProps) => {
    return <div className="flex-1 flex flex-col gap-2">
        <Text as='label' size="small" bold color="heading">{label}</Text>
        <div className={cn("flex flex-col gap-4 flex-wrap", className)}>
            {children}
        </div>
        {(error && error.length> 0 )&& <div>
                {error.map((err, index) => <Text key={index} size="very-small">{err}</Text>)}
            </div>}
    </div>
}