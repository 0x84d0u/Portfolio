
export type FormMode = 'create' | 'update' | 'delete' | 'view';

export type FormProps = {
    // mode: FormMode 

    errors?: string[]
    message?: string
    buttons?: React.ComponentProps<'button'>[]
    hiddenInputs?: {id: string, value: string}[]

} & Pick<React.ComponentProps<'form'>, 'action'>




