import React from "react";
import { cn } from "../../cn";

export type FormProps = {

    errors?: string[]
    message?: string
    buttons?: React.ComponentProps<'button'>[]
    hiddenInputs?: {id: string, value: string}[]

} & Pick<React.ComponentProps<'form'>, 'action'>


export const FormWrapper = ({
    // mode,
    errors,
    children,
    className,
    message,
    action,
    hiddenInputs,
    buttons = [
        { type: 'submit', children: "Submit" }
    ],
}: FormProps & {
    className?: string
    children?: React.ReactNode
}) => {



    return <form
        action={action}
        className={cn(
            "max-w-screen-tablet mx-auto",
            "bg-white border border-border p-6 rounded-2xl",
            className
        )}
    >
        {hiddenInputs && hiddenInputs.map((item, i) => <input type="hidden" name={item.id} value={item.value} />)}
        <div>
            {errors}
        </div>
        <div className="space-y-4">
            {children}
        </div>
        <div>
            {buttons.map((props, i) => <button
                key={i}
                {...props}
                className={cn("cursor-pointer bg-accent text-white h-12 w-full rounded-md text-sm font-semibold", props.className)}
            />)}
        </div>

    </form>
}

