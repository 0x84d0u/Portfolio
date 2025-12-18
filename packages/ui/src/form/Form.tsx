import React from "react";
import { cn } from "../cn";


export type FormProps = React.ComponentProps<'form'> & {

}

export const Form = ({
    children,
    className,
    onSubmit,
    ...rest
}: FormProps) => {
    return <form 
    onSubmit={e => {
        e.preventDefault();
        onSubmit && onSubmit(e)
    }}
    className={cn("max-w-screen-tablet w-full mx-auto bg-white border border-border p-8 rounded-md")}
     {...rest}
     >
        <div className="space-y-6">
            {children}
        </div>
        <div className="py-12">
            {onSubmit && <button type="submit" className="bg-accent text-white h-12 w-full rounded-md text-sm font-semibold"> Submit </button>}
        </div>
    </form>
}

