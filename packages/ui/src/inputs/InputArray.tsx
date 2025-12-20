"use client";

import * as React from "react";
import { Icon } from "../foundation/Icon";
import { Text } from "../foundation/Typograpghy";
import { InputText } from "./InputText";
import { cn } from "../cn";

type InputArrayProps = {
    name: string;               // 🔑 FormData key
    value: string[];
    onChange: (value: string[]) => void;
};

export const InputArray = ({
    name,
    value,
    onChange,
}: InputArrayProps) => {
    const dragIndex = React.useRef<number | null>(null);

    const update = (i: number, v: string) => {
        const copy = [...value];
        copy[i] = v;
        onChange(copy);
    };

    const add = () => onChange([...value, ""]);

    const remove = (i: number) =>
        onChange(value.filter((_, idx) => idx !== i));

    const move = (from: number, to: number) => {
        if (to < 0 || to >= value.length) return;

        const copy = [...value];
        const [item] = copy.splice(from, 1);

        if (!item) return;

        copy.splice(to, 0, item);
        onChange(copy);
    };

    return (
        <div className="space-y-2">
            {/* 🔐 Hidden inputs → FormData.getAll(name) */}
            {value.map((item, i) => (
                <input
                    key={`hidden-${i}`}
                    type="hidden"
                    name={name}
                    value={item}
                />
            ))}

            {value.map((item, i) => (
                <div
                    key={i}
                    draggable
                    onDragStart={() => (dragIndex.current = i)}
                    onDragOver={(e) => e.preventDefault()}
                    onDrop={() => {
                        if (dragIndex.current !== null) {
                            move(dragIndex.current, i);
                            dragIndex.current = null;
                        }
                    }}
                    className={cn(
                        "flex items-center gap-2 rounded-md border border-border/50",
                        "bg-background p-2"
                    )}
                >
                    {/* Drag handle */}
                    <Icon
                        name="GripVertical"
                        size={16}
                        className="cursor-grab text-muted-foreground"
                    />

                    {/* Index */}
                    <Text
                        bold
                        size="very-small"
                        className="w-6 text-center opacity-50"
                    >
                        {i + 1}
                    </Text>

                    <InputText
                        value={item}
                        onChange={(e) => update(i, e.target.value)}
                        className="flex-1"
                    />

                    <button
                        type="button"
                        onClick={() => remove(i)}
                        className="text-muted-foreground hover:text-destructive"
                    >
                        ✕
                    </button>
                </div>
            ))}

            <button
                type="button"
                onClick={add}
                className="w-full rounded-md border border-dashed py-2 text-sm text-muted-foreground hover:text-foreground"
            >
                + Add item
            </button>
        </div>
    );
};
