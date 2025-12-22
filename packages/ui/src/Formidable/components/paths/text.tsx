import { cn } from "../../../cn";
import { PathProps } from "../../types/path.types";
import { PathRoot } from "../ui/path-root";

export const TextPath = (props: PathProps<'text'>) => {
    const v =  props.value ?? '';
    return (
        <PathRoot kind='text' {...props} >
            <input
                type='text'
                name={props.id}
                defaultValue={v}
                className={cn("flex-1 bg-transparent outline-none placeholder:text-muted")}
                disabled={props.isDisabled}
            />
        </PathRoot>
    );
};
