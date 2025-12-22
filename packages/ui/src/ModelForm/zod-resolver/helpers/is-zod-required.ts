import z from "zod";

export function isZodRequired(validator: z.ZodTypeAny): boolean {
  // Optional / Nullable wrappers mean the field is NOT required
  if (validator instanceof z.ZodOptional || validator instanceof z.ZodNullable) {
    return false;
  }

  // Otherwise, required
  return true;
}

