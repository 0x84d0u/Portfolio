"use client";

import React, { useState } from "react";
import { TagsProps } from "../types";
import { FieldWrapper } from "../ui/FieldWrapper";

export const Tags = ({
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
}: TagsProps) => {

    const [tags, setTags] = useState<string[]>(defaultValue || []);
    const [inputValue, setInputValue] = useState("");

    const addTag = (tag: string) => {
        const t = tag.trim();
        if (!t || tags.includes(t)) return;
        setTags([...tags, t]);
        setInputValue("");
    };
    const removeTag = (idx: number) => setTags(tags.filter((_, i) => i !== idx));

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter" || e.key === ",") {
            e.preventDefault();
            addTag(inputValue);
        }
    };


    return <FieldWrapper
        // State 
        isDisabled={isDisabled}
        // Own props
        layout="textarea"
        start={start}
        end={end}
        icon={icon}
        className={className}
    >
        <div className="flex flex-wrap gap-1 items-center">
            {tags.map((t, idx) => (
                <span key={idx} className="flex items-center gap-1 px-2 py-1 bg-gray-200 rounded">
                    {t}
                    <button type="button" onClick={() => removeTag(idx)} disabled={isDisabled}>
                        ×
                    </button>
                </span>
            ))}
            <input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder={placeholder}
                className="flex-1 outline-none bg-transparent"
                disabled={isDisabled}
            />
            {/* Hidden input to collect all tags in FormData */}
            <input type="hidden" name={name} value={tags.join(",")} />
        </div>
    </FieldWrapper>
};
