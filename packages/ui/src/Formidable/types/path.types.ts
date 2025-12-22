import z from "zod";
import { IconName } from "../../foundation/Icon";

export type Choice = {
    label: string,
    value: string
}

type PathBaseProps = {

    isDisabled?: boolean
    isHidden?: boolean
    errors?: string[]

    icon?: IconName;
    start?: React.ReactNode;
    end?: React.ReactNode;
    rootCn?: string
}

type PathSpecificProps = {
    text: {
        id: string;
        value: string | null;
        placeholder?: string
        validator?: z.ZodString
    };

    textarea:
    | {
        id: string;
        value: string | null;
        values: never;
        rows?: number;
        validator?: z.ZodString
    }
    | {
        id: string;
        value: never;
        values: string[] | null;
        rows?: number;
        validator?: z.ZodArray<z.ZodString>
    };

    tags: {
        id: string;
        values: string[] | null;
        validator?: z.ZodArray<z.ZodString>
    };

    checkbox:
    | {
        id: string;
        value: boolean | null;
        label?: string;
        values: never;
        choices: never;
        validator?: z.ZodBoolean
    }
    | {
        id: string;
        value: never;
        label: never;
        values: string[] | null;
        choices: Choice[];
        validator?: z.ZodArray<z.ZodString>
    };

    radio: {
        id: string;
        value: string | null;
        choices: Choice[];
        validator?: z.ZodString
    };

    toggle: {
        id: string;
        value: boolean | null;
        placeholder?: string;
        validator?: z.ZodBoolean
    };
};


export type PathKind = keyof PathSpecificProps;

export type PathProps<K extends PathKind = PathKind> = PathBaseProps & PathSpecificProps[K];

export type PathConfig = {
    [K in PathKind]: PathProps<K> & { kind: K };
}[PathKind];

export type FormSchema = readonly PathConfig[]



export type PathId = PathConfig["id"];

export type PathParsedValue<C extends PathConfig> =
    C extends { kind: "text" } ? string | undefined :
    C extends { kind: "textarea" } ? string | string[] | undefined :
    C extends { kind: "tags" } ? string[] :
    C extends { kind: "checkbox" } ? boolean | string[] | undefined :
    C extends { kind: "radio" } ? string | undefined :
    C extends { kind: "toggle" } ? boolean :
    never;

