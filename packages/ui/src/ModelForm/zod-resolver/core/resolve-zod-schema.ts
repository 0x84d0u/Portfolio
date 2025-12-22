import z from "zod";

import { ZodResolvedSchema } from "../types";
import { isZodRequired } from "../helpers/is-zod-required";
import { getZodType } from "../helpers/get-zod-type";
import { humanizeFieldName } from "../helpers/humanize-field-name";

export const resolveZodSchema = <Model extends z.ZodObject<any>>({
    model,
    modelKey
}: {
    model: Model,
    modelKey: keyof z.infer<Model>,
}) => {
    const shape = model.shape as Record<keyof z.infer<Model>, z.ZodTypeAny>;
    const path = Object.fromEntries(Object.keys(shape).map(k => [k, k])) as Record<keyof z.infer<Model>, string>;
    const paths = Object.keys(shape) as (keyof z.infer<Model>)[]

    // Extract data type and isRequired from zod schema;

    const resolvedSchema = Object.fromEntries(
        Object.entries(shape).map(([k, validator]) => [
            k,
            {
                id: k,
                dataType: getZodType(validator),
                isRequired: isZodRequired(validator),
                name: humanizeFieldName(k)
            } as ZodResolvedSchema,
        ])
    ) as Record<keyof z.infer<Model>, ZodResolvedSchema>;

    return {
        baseZodSchema: model,
        createZodSchema: model.omit({ [modelKey]: true } as const),
        updateZodSchema: model.partial(),
        deleteZodSchema: model.pick({ [modelKey]: true } as const),
        // Form schemas
        path,
        paths,
        resolvedSchema,
    }
}
