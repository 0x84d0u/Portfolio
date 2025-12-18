"use client";

import { Icon } from "../foundation/Icon";
import { Text } from "../foundation/Typograpghy";
import { InputText } from "./InputText";

type InputArrayProps = {
    value: string[];
    onChange: (value: string[]) => void;
};

export const InputArray = ({ value, onChange }: InputArrayProps) => {
    const update = (i: number, v: string) => {
        const copy = [...value];
        copy[i] = v;
        onChange(copy);
    };

    const add = () => onChange([...value, ""]);
    const remove = (i: number) => onChange(value.filter((_, idx) => idx !== i));
    const move = (from: number, to: number) => {
        if (to < 0 || to >= value.length) return;
        const copy = [...value];
        [copy[from], copy[to]] = [copy[to], copy[from]];
        onChange(copy);
    };

    return (
        <div className="space-y-2">
            {value.map((item, i) => (
                <div className="flex space-x-2" key={i}>
                    <button disabled={i === 0} onClick={() => move(i, i - 1)}>
                        <Icon size={16} name="ArrowUp"/>
                    </button>
                    <button disabled={i === value.length - 1} onClick={() => move(i, i + 1)}>
                        <Icon size={16} name="ArrowDown" />
                    </button>
                    <InputText
                        value={item}
                        onChange={v => update(i, v)}
                        start={<Text bold size="very-small" className="opacity-50">
                            {i + 1}
                        </Text>}
                        end={
                            <>
                            </>
                        }
                    />
                    <button onClick={() => remove(i)}>Remove</button>
                </div>

            ))}

            <button onClick={add} className="w-full">
                Add
            </button>
        </div>
    );
};
