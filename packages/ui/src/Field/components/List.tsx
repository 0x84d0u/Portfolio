"use client";

import { useState } from "react";
import { ListProps } from "../types";
import { FieldWrapper } from "../ui/FieldWrapper";
import { cn } from "../../cn";

export const List = ({
    // State
    isDisabled,
    // Wrapper
    start,
    end,
    icon,
    className,
    // Field
    name,
    placeholder,
    defaultValue,
}: ListProps) => {

    const [items, setItems] = useState<string[]>(defaultValue || []);
    const addItem = () => setItems([...items, ""]);
    const updateItem = (idx: number, val: string) => setItems(items.map((v, i) => (i === idx ? val : v)));
    const removeItem = (idx: number) => setItems(items.filter((_, i) => i !== idx));

    return <div className="flex flex-col gap-1">
        {items.map((item, idx) => (
            <FieldWrapper
                key={idx}
                // State 
                isDisabled={isDisabled}
                // Own props
                layout="textarea"
                start={start}
                end={end}
                icon={icon}
                className={className}
            >
                <input
                    name={`${name}[${idx}]`}
                    value={item}
                    onChange={(e) => updateItem(idx, e.target.value)}
                    placeholder={placeholder}
                    className={cn("flex-1 bg-transparent outline-none placeholder:text-muted")}
                    disabled={isDisabled}
                />
                <button type="button" onClick={() => removeItem(idx)} disabled={isDisabled}>
                    ×
                </button>
            </FieldWrapper>
        ))}
        <button type="button" onClick={addItem} disabled={isDisabled}>
            + Add
        </button>
    </div>


};
