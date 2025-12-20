import { Checkbox } from "./components/Checkbox";
import { Checkboxes } from "./components/Checkboxes";
import { List } from "./components/List";
import { Paragraph } from "./components/Paragraph";
import { Radio } from "./components/Radio";
import { Tags } from "./components/Tags";
import { Text } from "./components/Text";
import { TextArea } from "./components/TextArea";
import { Toggle } from "./components/Toggle";

export const Field = {
    // string
    Text,
    TextArea,
    Checkbox,
    // string[]
    Paragraph,
    List,
    Tags,
    Checkboxes,
    // boolean
    Toggle,
    Radio,
}

export { 
    parseFieldValue
} from './helpers/parseFieldValue'