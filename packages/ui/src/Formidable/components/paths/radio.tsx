"use client";

import { useState } from "react";
import { PathProps } from "../../types/path.types";
import { PathRoot } from "../ui/path-root";

export const RadioPath = (props: PathProps<'radio'>) => {

    const v = props.value  || "";

    const [selected, setSelected] = useState(v);

    return (
        <PathRoot kind='radio'{...props} >
            <div className="flex flex-col gap-1">
                {props.choices.map((choice, idx) => (
                    <label key={idx} className="inline-flex items-center gap-2 cursor-pointer">
                        <input
                            type="radio"
                            name={props.id}
                            value={choice.value}
                            checked={selected === choice.value}
                            onChange={() => setSelected(choice.value)}
                            disabled={props.isDisabled}
                        />
                        <span>{choice.label}</span>
                    </label>
                ))}
            </div>
        </PathRoot>
    );
};
