"use client";

import React, { useState } from "react";
import { FieldWrapper } from "../ui/FieldWrapper";
import { CheckboxesProps, CheckboxProps, RadioProps } from "../types";
import { cn } from "../../cn";

export const Radio = ({ name, options, defaultValue, ...wrapperProps }: RadioProps) => {
    const [selected, setSelected] = useState(defaultValue || "");

    return (
        <FieldWrapper {...wrapperProps} layout="toggle">
            <div className="flex flex-col gap-1">
                {options.map((option, idx) => (
                    <label key={idx} className="inline-flex items-center gap-2 cursor-pointer">
                        <input
                            type="radio"
                            name={name}
                            value={option.value}
                            checked={selected === option.value}
                            onChange={() => setSelected(option.value)}
                            disabled={wrapperProps.isDisabled}
                        />
                        <span>{option.label}</span>
                    </label>
                ))}
            </div>
        </FieldWrapper>
    );
};