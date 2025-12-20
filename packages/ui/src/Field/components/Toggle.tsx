'use client';

import { useState } from "react";
import { FieldWrapper } from "../ui/FieldWrapper";
import { cn } from "../../cn";
import { ToggleProps } from "../types";

export const Toggle = ({ name, defaultValue = false, label, icon, start, end, className, isDisabled }: ToggleProps) => {
  const [checked, setChecked] = useState(defaultValue);

  const handleChange = () => {
    if (isDisabled) return;
    setChecked(!checked);
  };

  return (
    <FieldWrapper layout="toggle" icon={icon} start={start} end={end} isDisabled={isDisabled} className={className}>
      <label className="relative inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          name={name}
          checked={checked}
          onChange={handleChange}
          disabled={isDisabled}
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
      {label && <span>{label}</span>}
    </FieldWrapper>
  );
};