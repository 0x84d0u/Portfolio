import z from "zod";
import { FormSchema } from "../types/path.types";
import { FormParsedValues } from "../types/action.types";
import { parsePath } from "./paths";


export const parseFormData = <
    Sch extends FormSchema = FormSchema
>(
    formSchema: Sch,
    fd: FormData,
) => {
    const data = {} as FormParsedValues<Sch>;

    for (const pathSchema of formSchema) {
        data[pathSchema.id as keyof FormParsedValues<Sch>] =
            parsePath(pathSchema, fd) as any;
    }

    return data;
};

export const parseFormValidation = <
    Sch extends FormSchema = FormSchema
>(
    formSchema: Sch,
    validationSchema?: z.ZodObject<any>
) => {
    const pathSchemaShape: Record<string, z.ZodTypeAny> = {};

    formSchema.forEach((p) => {
        if (p.validator) {
            pathSchemaShape[p.id] = p.validator;
        }
    });

    return validationSchema
        ? validationSchema.extend(pathSchemaShape) 
        : z.object(
            Object.fromEntries(
                formSchema.map((p) => [p.id, p.validator ?? z.any()])
            )
        );
};


export const formatZodErrors = (validation: z.ZodSafeParseError<Record<string, any>>) => {
    const pathErrors: Record<string, string[]> = {};
    validation.error.issues.forEach((issue) => {
        const key = issue.path[0];
        if (typeof key === "string") {
            pathErrors[key] = [
                ...(pathErrors[key] ?? []),
                issue.message,
            ];
        }
    });
    return pathErrors;
}