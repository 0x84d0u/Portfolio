'use client';

import { cn } from "../../../cn";
import { PathProps } from "../../types/path.types";
import { PathRoot } from "../ui/path-root";
import { useState } from "react";

export const TogglePath = (props: PathProps<'toggle'>) => {

    const v = props.value || false

    const [checked, setChecked] = useState(v);

    const handleChange = () => {
        if (props.isDisabled) return;
        setChecked(!checked);
    };

    return (
        <PathRoot kind='toggle' {...props} >
            <label className="relative inline-flex items-center cursor-pointer">
                <input
                    type="checkbox"
                    name={props.id}
                    checked={checked}
                    onChange={handleChange}
                    disabled={props.isDisabled}
                    className="sr-only"
                />
                <span
                    className={cn(
                        "w-10 h-5 bg-gray-300 rounded-full transition-colors",
                        checked && "bg-accent"
                    )}
                />
                <span
                    className={cn(
                        "absolute left-0.5 top-0.5 w-4 h-4 bg-white rounded-full shadow transform transition-transform",
                        checked && "translate-x-5"
                    )}
                />
            </label>
            {props.placeholder && <span>{props.placeholder}</span>}
        </PathRoot>
    );
};



