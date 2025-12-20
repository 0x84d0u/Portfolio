"use client";

import React, { useState } from "react";
import { FieldWrapper } from "../ui/FieldWrapper";
import { CheckboxProps } from "../types";
import { cn } from "../../cn";

export const Checkbox = ({ name, label, defaultValue = false, ...wrapperProps }: CheckboxProps) => {
    const [checked, setChecked] = useState(defaultValue);

    const handleChange = () => setChecked(!checked);

    return (
        <FieldWrapper {...wrapperProps} layout="toggle">
            <label className="inline-flex items-center gap-2 cursor-pointer">
                <input
                    type="checkbox"
                    name={name}
                    checked={checked}
                    onChange={handleChange}
                    className="sr-only"
                    disabled={wrapperProps.isDisabled}
                />
                <span
                    className={cn(
                        "w-5 h-5 border rounded bg-white shrink-0",
                        checked && "bg-accent border-accent"
                    )}
                />
                {label && <span>{label}</span>}
            </label>
        </FieldWrapper>
    );
};