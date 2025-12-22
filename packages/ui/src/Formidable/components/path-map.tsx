import { PathKind } from "../types/path.types";
import { CheckboxPath } from "./paths/checkbox";
import { RadioPath } from "./paths/radio";
import { TagsPath } from "./paths/tags";
import { TextPath } from "./paths/text";
import { TextAreaPath } from "./paths/textarea";
import { TogglePath } from "./paths/toggle";

export const pathMap = {
  text: TextPath,
  textarea: TextAreaPath,
  tags: TagsPath,
  checkbox: CheckboxPath,
  radio: RadioPath,
  toggle: TogglePath,
} satisfies Record<PathKind, React.ComponentType<any>>;