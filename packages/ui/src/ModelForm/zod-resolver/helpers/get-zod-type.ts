import z from "zod";
import { ZodDataType } from "../types";

export function getZodType(validator: z.ZodTypeAny): ZodDataType {
    if (validator instanceof z.ZodString) return "string";
    if (validator instanceof z.ZodNumber) return "number";
    if (validator instanceof z.ZodBoolean) return "boolean";
    if (validator instanceof z.ZodDate) return "date";
    if (validator instanceof z.ZodArray) {
        // check if it's an array of strings
        const inner = (validator as z.ZodArray<z.ZodTypeAny>).element;
        if (inner instanceof z.ZodString) return "string[]";
        return "any";
    }

    // Optional / Nullable wrappers: unwrap recursively
    if (validator instanceof z.ZodOptional || validator instanceof z.ZodNullable) {
        return getZodType((validator as any)._def.innerType);
    }

    return "any"; // fallback
}
