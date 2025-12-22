"use client";

import React, { useState } from "react";
import { PathProps } from "../../types/path.types";
import { PathRoot } from "../ui/path-root";


export const TagsPath = (props: PathProps<'tags'>) => {

    const v = props.values || []

    const [tags, setTags] = useState<string[]>(v);
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


    return (
        <PathRoot kind='tags' {...props} >
            <div className="flex flex-wrap gap-1 items-center">
                {tags.map((t, idx) => (
                    <span key={idx} className="flex items-center gap-1 px-2 py-1 bg-gray-200 rounded">
                        {t}
                        <button type="button" onClick={() => removeTag(idx)} disabled={props.isDisabled}>
                            ×
                        </button>
                    </span>
                ))}
                <input
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder={props.id}
                    className="flex-1 outline-none bg-transparent"
                    disabled={props.isDisabled}
                />
                {/* Hidden input to collect all tags in FormData */}
                <input type="hidden" name={props.id} value={tags.join(",")} />
            </div>
        </PathRoot>
    );
};
