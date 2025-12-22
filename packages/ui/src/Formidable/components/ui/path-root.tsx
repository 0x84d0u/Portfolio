import { cn, Icon } from "@portfolio/ui";
import { PathKind, PathProps } from "../../types/path.types";


type Props<K extends PathKind = PathKind> = PathProps<K> & {
    kind: K
    children?: React.ReactNode;
}

export const PathRoot = ({
    icon,
    start,
    end,
    isDisabled,
    rootCn,
    children,
    kind,
    isHidden,
    id,
    errors,
}: Props) => {

    const isKind = (...choices: typeof kind[]) => choices.includes(kind);
    const isErr = errors && errors.length > 0;

    return (
        <div
            className={cn(
                "flex w-full gap-2 text-sm ",
                // States
                isDisabled && "opacity-50 cursor-not-allowed",
                // Card Layout
                isKind('text', 'textarea') && cn(
                    'bg-white rounded-sm border border-border/50 focus-within:ring-2 focus-within:ring-accent',
                    isErr && 'ring-1 ring-red-500/80'
                ),
                // Paragraph Layout
                isKind('textarea',) && "p-2 resize-none",
                // Content Layout
                isKind('text') && "h-9 items-center px-2",
                rootCn
            )}
        >
            {icon && <Icon name={icon} size={16} className="shrink-0 text-muted" />}
            {start && <span className="shrink-0 text-muted-foreground">{start}</span>}
            {children}
            {end && <div className="shrink-0">{end}</div>}
            {isErr && <Icon name='AlertCircle' size={16} className="shrink-0 text-red-500" />}
        </div>
    );
};

PathRoot.displayName = 'FieldRoot'