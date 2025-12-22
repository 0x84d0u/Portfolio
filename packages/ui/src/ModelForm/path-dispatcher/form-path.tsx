import React from "react";
import { cn } from "../../cn";
import { CheckboxPathProps, DatePathProps, InputPathProps, PathBaseProps, RadioPathProps, TextareaPathProps, TogglePathProps } from "./types";


// -------------------- Wrapper -------------------- //

type RootProps = {
    children?: React.ReactNode;
};

const Root = ({ children }: RootProps) => (
    <div>{children}</div>
);

// -------------------- Input -------------------- //


export const InputPath = ({
    id,
    name,
    value,
    onChange,
    placeholder,
    disabled,
    dataType,
    isRequired,
}: InputPathProps) => {
    return (
        <Root>
            <input
                id={id}
                type={dataType === 'number' ? 'number' : 'text'}
                name={id}
                defaultValue={value || ''}
                onChange={(e) => {
                    const val = dataType === 'number' ? Number(e.target.value) : e.target.value;
                    onChange?.(val);
                }}
                placeholder={placeholder || name}
                disabled={disabled}
                required={isRequired}
                className={cn("flex-1 bg-transparent outline-none placeholder:text-muted")}
            />
        </Root>
    );
};

// -------------------- Textarea -------------------- //


export const TextareaPath = ({
    id,
    name,
    value,
    onChange,
    placeholder,
    disabled,
    dataType,
    isRequired,
}: TextareaPathProps) => {
    return (
        <Root>
            <textarea
                id={id}
                name={id}
                defaultValue={Array.isArray(value) ? value.join('\n') : (value || '')}
                onChange={(e) => {
                    const val = dataType === 'string[]'
                        ? e.target.value.split('\n').map(s => s.trim()).filter(Boolean)
                        : e.target.value;
                    onChange?.(val);
                }}
                placeholder={placeholder || name}
                disabled={disabled}
                required={isRequired}
                className={cn("flex-1 bg-transparent outline-none placeholder:text-muted")}
            />
        </Root>
    );
};

// -------------------- Checkbox -------------------- //


export const CheckboxPath = ({
    id,
    name,
    value,
    onChange,
    disabled,
    dataType,
    isRequired,
    options = [],
}: CheckboxPathProps) => {
    if (dataType === 'boolean') {
        return (
            <Root>
                <label>
                    <input
                        id={id}
                        type="checkbox"
                        name={id}
                        checked={value || false}
                        onChange={(e) => onChange?.(e.target.checked)}
                        disabled={disabled}
                        required={isRequired}
                    />
                    {name}
                </label>
            </Root>
        );
    }

    // string[] with options
    return (
        <Root>
            <fieldset>
                {options.map((opt) => (
                    <label key={opt.value}>
                        <input
                            type="checkbox"
                            name={id}
                            value={opt.value}
                            checked={(value || []).includes(opt.value)}
                            onChange={(e) => {
                                const newValue = e.target.checked
                                    ? [...(value || []), opt.value]
                                    : (value || []).filter((v: any) => v !== opt.value);
                                onChange?.(newValue);
                            }}
                            disabled={disabled}
                            required={isRequired}
                        />
                        {opt.label}
                    </label>
                ))}
            </fieldset>
        </Root>
    );
};

// -------------------- Radio -------------------- //



export const RadioPath = ({
    id,
    name,
    value,
    onChange,
    disabled,
    dataType,
    isRequired,
    options = [],
}: RadioPathProps) => {
    return (
        <Root>
            <fieldset>
                {options.map((opt) => (
                    <label key={opt.value}>
                        <input
                            type="radio"
                            name={id}
                            value={opt.value}
                            checked={value === opt.value}
                            onChange={(e) => {
                                const val = dataType === 'number' ? Number(e.target.value) : e.target.value;
                                onChange?.(val);
                            }}
                            disabled={disabled}
                            required={isRequired}
                        />
                        {opt.label}
                    </label>
                ))}
            </fieldset>
        </Root>
    );
};

// -------------------- Toggle -------------------- //


export const TogglePath = ({
    id,
    name,
    value,
    onChange,
    disabled,
    isRequired,
}: TogglePathProps) => {
    return (
        <Root>
            <label>
                <input
                    id={id}
                    type="checkbox"
                    name={id}
                    checked={value || false}
                    onChange={(e) => onChange?.(e.target.checked)}
                    disabled={disabled}
                    required={isRequired}
                />
                {name}
            </label>
        </Root>
    );
};

// -------------------- Date -------------------- //


export const DatePath = ({
    id,
    name,
    value,
    onChange,
    disabled,
    isRequired,
}: DatePathProps) => {
    return (
        <Root>
            <input
                id={id}
                type="date"
                name={id}
                defaultValue={value || ''}
                onChange={(e) => onChange?.(e.target.value)}
                disabled={disabled}
                required={isRequired}
                className={cn("flex-1 bg-transparent outline-none")}
            />
        </Root>
    );
};