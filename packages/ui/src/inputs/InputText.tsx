import React from "react";
import { Icon, IconName } from "../foundation/Icon";
import { cn } from "../cn";

export type InputTextProps =
  Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange"> & {
    start?: React.ReactNode;
    end?: React.ReactNode;
    icon?: IconName;
    onChange?: (value: string) => void;
  };

export const InputText = ({
  className,
  start,
  end,
  icon,
  type = "text",
  onChange,
  ...rest
}: InputTextProps) => {
  return (
    <div
      className={cn(
        "flex-1 flex items-center gap-2",
        "h-9 min-h-9 rounded-md border border-border/50 bg-white px-2 text-sm",
        "focus-within:ring focus-within:ring-accent",
        className
      )}
    >
      {icon && <Icon name={icon} size={16} className="text-muted/50" />}
      {start && <span className="text-muted/50">{start}</span>}

      <input
        type={type}
        className="flex-1 bg-transparent outline-none"
        onChange={(e) => onChange?.(e.target.value)}
        {...rest}
      />

      {end}
    </div>
  );
};
