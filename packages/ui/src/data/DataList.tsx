import * as React from "react";
import { cn } from "../cn";

export type DataListProps = {
  data: Record<string, any>; // key → value
  className?: string;
  labelClassName?: string;
  valueClassName?: string;
  longStringThreshold?: number;
};
// if (!value) return <span className="italic">{`<empty>`}</span>

export const DataList = ({
  data,
  className,
  labelClassName,
  valueClassName,
  longStringThreshold = 10,
}: DataListProps) => {
  const renderValue = (value: unknown) => {
    if (!value) return <span className="italic">{`<empty>`}</span>

    if (typeof value === "string" || typeof value === "number") {
      return <span>{value}</span>;
    }

    if (Array.isArray(value) && value.every(v => typeof v === "string")) {
      const hasLong = value.some(v => v.length > longStringThreshold);

      if (hasLong) {
        // Render each on separate line, emphasize
        return value.map((v, i) => (
          <div key={i} className="italic wrap-break-word">
            {v}
          </div>
        ));
      } else {
        // Join short strings with commas
        return <span>{value.join(", ")}</span>;
      }
    }


    return <span className="text-muted-foreground">Unknown format</span>;
  };

  return (
    <dl
      className={cn(
        "grid gap-y-2",
        className,
        // 2-column grid: label auto, value flex
        "grid-cols-[max-content_1fr] items-start"
      )}
    >
      {Object.entries(data).map(([key, value]) => (
        <React.Fragment key={key}>
          <dt className={cn("font-semibold pr-2 text-left", labelClassName)}>{key}:</dt>
          <dd className={cn("flex-1", valueClassName)}>{renderValue(value)}</dd>
        </React.Fragment>
      ))}
    </dl>
  );
};
