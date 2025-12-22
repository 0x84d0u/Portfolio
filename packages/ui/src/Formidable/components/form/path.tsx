import { PathConfig, PathKind, PathProps } from "../../types/path.types";

import { TextPath } from "../paths/text";
import { TextAreaPath } from "../paths/textarea";
import { CheckboxPath } from "../paths/checkbox";
import { TagsPath } from "../paths/tags";
import { TogglePath } from "../paths/toggle";
import { RadioPath } from "../paths/radio";

// const pathMap: {
//   [K in PathKind]: React.ComponentType<PathProps<K>>;
// } = {
//   text: TextPath,
//   textarea: TextAreaPath,
//   tags: TagsPath,
//   checkbox: CheckboxPath,
//   radio: RadioPath,
//   toggle: TogglePath,
// };

export const FormPath = (config: PathConfig) => {
  switch (config.kind) {
    case "text": return <TextPath {...config} />;
    case "textarea": return <TextAreaPath {...config} />;
    case "tags": return <TagsPath {...config} />;
    case "checkbox": return <CheckboxPath {...config} />;
    case "radio": return <RadioPath {...config} />;
    case "toggle": return <TogglePath {...config} />;
  }
};