import z from "zod";
import { ZodDataType } from "../zod-resolver/types";

export type ViewMap = {
    string: "text" | "textarea" | "radio" | "hidden";
    "string[]": "textarea" | "tags" | "checkbox" | "hidden";
    boolean: "toggle" | "checkbox" | "hidden";
    number: "number" | "slider" | "radio" | "hidden";
    "number[]": "checkbox" | "tags" | "hidden";
    date: "date" | "datetime" | "hidden";
    any: "text" | "hidden";
};

export type Section = {
    id: string;
    label: string;
};

type ValidateViewMap = {
    [K in keyof ViewMap]: K extends ZodDataType ? true : false;
}

type UnwrapZod<T> =
    T extends z.ZodOptional<infer U> ? UnwrapZod<U> :
    T extends z.ZodNullable<infer U> ? UnwrapZod<U> :
    T;

type ZodTypeToDataType<T> =
    UnwrapZod<T> extends z.ZodString ? "string" :
    UnwrapZod<T> extends z.ZodArray<infer U> ?
    (UnwrapZod<U> extends z.ZodString ? "string[]" :
        UnwrapZod<U> extends z.ZodNumber ? "number[]" :
        "string") :
    UnwrapZod<T> extends z.ZodBoolean ? "boolean" :
    UnwrapZod<T> extends z.ZodNumber ? "number" :
    UnwrapZod<T> extends z.ZodDate ? "date" :
    "any";

type PathFieldConfig<DataType extends ZodDataType = ZodDataType, SectionIds extends string = string> = {
    kind?: ViewMap[DataType];
    section?: SectionIds;
};

export type PathSchema<
    Model extends z.ZodObject<any>,
    SectionIds extends string = string
> = {
        [K in keyof z.infer<Model>]?: PathFieldConfig<ZodTypeToDataType<Model['shape'][K & string]>, SectionIds>
    };