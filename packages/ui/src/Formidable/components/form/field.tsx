import { cn } from "../../../cn"
import { Text } from "../../../foundation/Typograpghy"

export type FormFieldProps = {
    label?: string
    children?: React.ReactNode
    className?: string
    errors?: string[]
}

export const FormField = ({
    label,
    children,
    errors,
    className
}: FormFieldProps) => {
    return <div className="flex-1 flex flex-col gap-2">

        <div className="flex items-start">
            <div className="w-50">
                <Text as='label' className="text-sm font-semibold">{label}</Text>
            </div>
            <div className={cn("flex-1 flex flex-col gap-4 flex-wrap", className)}>
                {children}
            </div>
        </div>

        {(errors && errors.length > 0) && <div>
            {errors.map((err, index) => <Text key={index} size="very-small">{err}</Text>)}
        </div>}
    </div>
}