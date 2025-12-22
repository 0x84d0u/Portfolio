import { ZodResolvedSchema } from "../zod-resolver/types";


// -------------------- Tokens -------------------- //

export type Choice = {
    label: string;
    value: string;
};

export type PathDataView = {
    input: 'string' | 'number';
    textarea: 'string' | 'string[]';
    radio: 'string' | 'number';
    checkbox: 'boolean' | 'string[]';
    toggle: 'boolean';
    date: 'date';
};

// -------------------- Utils -------------------- //

export type PathDispatcherProps = PathBaseProps & {
    dataView: keyof PathDataView;
    options?: Choice[];
    value?: any;
    onChange?: (value: any) => void;
    placeholder?: string;
    disabled?: boolean;
};

// -------------------- UI -------------------- //



// -------------------- Paths -------------------- //

export type PathBaseProps = ZodResolvedSchema & {
    value?: any;
    onChange?: (value: any) => void;
    placeholder?: string;
    disabled?: boolean;
};

export type InputPathProps = PathBaseProps & {
    dataType: 'string' | 'number';
};

export type TextareaPathProps = PathBaseProps & {
    dataType: 'string' | 'string[]';
};


export type CheckboxPathProps = PathBaseProps & {
    dataType: 'boolean' | 'string[]';
    options?: Choice[];
};

export type RadioPathProps = PathBaseProps & {
    dataType: 'string' | 'number';
    options?: Choice[];
};

export type TogglePathProps = PathBaseProps & {
    dataType: 'boolean';
};


export type DatePathProps = PathBaseProps & {
    dataType: 'date';
};

