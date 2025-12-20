import { cn } from "../../cn";
import { TextProps } from "../types";
import { FieldWrapper } from "../ui/FieldWrapper";

export const Text = ({
  // State
  isDisabled,
  // Wrapper
  start,
  end,
  icon,
  className,
  // Field
  name,
  defaultValue,
  placeholder,
  type = "text",
}: TextProps) => {
  return (
    <FieldWrapper
      // State 
      isDisabled={isDisabled}
      // Own props
      layout="input"
      start={start}
      end={end}
      icon={icon}
      className={className}
    >
      <input
        type={type}
        name={name}
        defaultValue={defaultValue}
        placeholder={placeholder}
        className={cn("flex-1 bg-transparent outline-none placeholder:text-muted")}
        disabled={isDisabled}
      />
    </FieldWrapper>
  );
};