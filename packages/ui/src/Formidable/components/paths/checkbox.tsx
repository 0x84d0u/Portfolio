"use client";

import { useState } from "react";
import { PathProps, Choice } from "../../types/path.types";
import { PathRoot } from "../ui/path-root";

export const CheckboxPath = (props: PathProps<'checkbox'>) => {

    const isMulti = props.values && props.choices;
    
    const v = () => {
        if (isMulti) {
            return props.values ? props.values : []
        } else {
            return props.value ? ["__single__"] : []
        }
    } 

    const [values, setValues] = useState<string[]>(v());

    const choices: Choice[] = isMulti ? props.choices : [{ label: props.label || '', value: "__single__", },];

    const onSelect = (choice: Choice) => {
        setValues(prev => prev.includes(choice.value) ? prev.filter(v => v !== choice.value) : [...prev, choice.value]);
    };

    const isSelected = (choice: Choice) => values.includes(choice.value);

    return (
        <PathRoot kind="checkbox" {...props}>
            <div className="flex flex-col gap-1">
                {choices.map(choice => (
                    <label
                        key={choice.value}
                        className="inline-flex items-center gap-2 cursor-pointer"
                    >
                        <input
                            type="checkbox"
                            name={props.id}
                            value={choice.value}
                            checked={isSelected(choice)}
                            onChange={() => onSelect(choice)}
                            disabled={props.isDisabled}
                        />
                        <span>{choice.label}</span>
                    </label>
                ))}
            </div>
        </PathRoot>
    );
};
