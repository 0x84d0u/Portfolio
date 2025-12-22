import React from "react";
import { cn } from "../../cn";

export type FormProps = React.ComponentProps<'form'> & {
    submitText?: string
    error?: string
}

export const FormWrapper = ({
    submitText = 'Submit',
    error,
    
    children,
    className,

    ...rest
}: FormProps) => {

    const showSubmit = !!submitText
    const showButtons = !!showSubmit

    return <form 
        className={cn(
            "max-w-screen-tablet mx-auto",
            "bg-white border border-border p-6 rounded-2xl",
            className
        )} 
        {...rest}
        
        >
        <div>
            {error}
        </div>
        <div className="space-y-4">
            {children}
        </div>
        {showButtons && <div className="py-6">
            {showSubmit && <button type="submit" className="cursor-pointer bg-accent text-white h-12 w-full rounded-md text-sm font-semibold">
                {submitText}
            </button>}
        </div>}

    </form>
}

