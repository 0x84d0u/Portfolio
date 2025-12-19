import React from "react";
import { cn } from "../cn";

export type FormMode = 'create' | 'read' | 'update' | 'delete'

export type FormProps = React.ComponentProps<'form'> & {
    mode?: FormMode
}

export const Form = ({
    mode = 'create',
    children,
    className,
    ...rest
}: FormProps) => {

    const showSubmit = mode && ['create', 'update'].includes(mode)
    const showButtons = !!showSubmit


    return <form
        className={cn(className)}
        {...rest}
    >
        <div className="space-y-6">
            {children}
        </div>
        {showButtons && <div className="py-6">
            {showSubmit && <button type="submit" className="cursor-pointer bg-accent text-white h-12 w-full rounded-md text-sm font-semibold">
            {mode === 'create' && 'Create'}
            {mode === 'update' && 'Update'}
        </button>}
        </div>}

    </form>
}

