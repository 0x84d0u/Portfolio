import { cn } from "../../cn";
import {  TextAreaProps } from "../types";
import { FieldWrapper } from "../ui/FieldWrapper";

export const TextArea = ({
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
    rows = 8,
}: TextAreaProps) => {
  return  <FieldWrapper
      // State 
      isDisabled={isDisabled}
      // Own props
      layout="textarea"
      start={start}
      end={end}
      icon={icon}
      className={className}
    >
      <textarea
        name={name}
        defaultValue={defaultValue}
        placeholder={placeholder}
        rows={rows}
        className={cn("flex-1 bg-transparent outline-none placeholder:text-muted")}
        disabled={isDisabled}
      />
    </FieldWrapper>
};

