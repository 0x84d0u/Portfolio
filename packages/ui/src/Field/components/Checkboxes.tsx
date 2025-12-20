"use client";

import React, { useState } from "react";
import { FieldWrapper } from "../ui/FieldWrapper";
import { CheckboxesProps, CheckboxProps } from "../types";
import { cn } from "../../cn";

export const Checkboxes = ({ name, options, defaultValue = [], ...wrapperProps }: CheckboxesProps) => {
  const [checkedValues, setCheckedValues] = useState<string[]>(defaultValue);

    const toggleOption = (option: string) => {
        setCheckedValues(prev =>
            prev.includes(option) ? prev.filter(v => v !== option) : [...prev, option]
        );
    };

    return (
        <FieldWrapper {...wrapperProps} layout="toggle">
            <div className="flex flex-col gap-1">
                {options.map((option, idx) => (
                    <label key={idx} className="inline-flex items-center gap-2 cursor-pointer">
                        <input
                            type="checkbox"
                            name={name}
                            value={option}
                            checked={checkedValues.includes(option)}
                            onChange={() => toggleOption(option)}
                            disabled={wrapperProps.isDisabled}
                        />
                        <span>{option}</span>
                    </label>
                ))}
            </div>
        </FieldWrapper>
    );
};