import {
    CheckboxPath,
    DatePath,
    InputPath,
    RadioPath,
    TextareaPath,
    TogglePath
} from "./form-path";

import type {
    CheckboxPathProps,
    DatePathProps,
    InputPathProps,
    PathDispatcherProps,
    RadioPathProps,
    TextareaPathProps,
    TogglePathProps
} from "./types";

export const FormPathDispatcher = (props: PathDispatcherProps) => {
    const { dataView, ...rest } = props;

    switch (dataView) {
        case 'input':
            return <InputPath {...(rest as InputPathProps)} />;
        case 'textarea':
            return <TextareaPath {...(rest as TextareaPathProps)} />;
        case 'checkbox':
            return <CheckboxPath {...(rest as CheckboxPathProps)} />;
        case 'radio':
            return <RadioPath {...(rest as RadioPathProps)} />;
        case 'toggle':
            return <TogglePath {...(rest as TogglePathProps)} />;
        case 'date':
            return <DatePath {...(rest as DatePathProps)} />;
        default:
            return <InputPath {...(rest as InputPathProps)} />;
    }
};