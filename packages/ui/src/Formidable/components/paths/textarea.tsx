import { cn } from "../../../cn";
import { PathProps } from "../../types/path.types";
import { PathRoot } from "../ui/path-root";

export const TextAreaPath = (props: PathProps<'textarea'>) => {
    const v = props.values ? props.values.join("\n") : props.value ?? '';
    return (
        <PathRoot kind='textarea'{...props} >
            <textarea
                name={props.id}
                defaultValue={v}
                rows={props.rows}
                className={cn("flex-1 bg-transparent outline-none placeholder:text-muted")}
                disabled={props.isDisabled}
            />
        </PathRoot>
    );
};
