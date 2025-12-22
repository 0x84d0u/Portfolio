import { FormSchema, PathConfig } from "../types/path.types";


export const initFormSchema = (sch: FormSchema)  : FormSchema => {
    return sch as FormSchema
}

export function mergeFormSchema(
  base: FormSchema,
  updates: Partial<Record<PathConfig["id"], Partial<PathConfig>>>
): FormSchema {
  return base.map((field) => {
    const update = updates[field.id];
    if (!update) return field;

    return {
      ...field,
      ...update,
    };
  }) as FormSchema;
}


export const parsePath = (pathConfig: PathConfig, fd: FormData) => {

    switch (pathConfig.kind) {

        case "text": {
            const raw = fd.get(pathConfig.id);
            return typeof raw === "string" && raw.trim() !== "" ? raw : undefined;
        }

        case "textarea": {
            const raw = fd.get(pathConfig.id);
            if (typeof raw !== "string" || raw.trim() === "") return undefined;
            return !!pathConfig.values ? raw.split('\n') : raw;
        }

        case "tags": {
            const raw = fd.get(pathConfig.id);
            if (typeof raw !== "string" || raw.trim() === "") return [];
            return raw.split(",").map(t => t.trim()).filter(Boolean);
        }

        case "checkbox": {
            if (pathConfig.values) {
                const values = fd.getAll(pathConfig.id).filter(v => typeof v === "string") as string[];
                return values.length ? values : undefined;
            }
            return fd.get(pathConfig.id) !== null;
        }

        case "radio": {
            const raw = fd.get(pathConfig.id);
            return typeof raw === "string" ? raw : undefined;
        }

        case "toggle": {
            return fd.get(pathConfig.id) !== null;
        }

        default: {
            const _exhaustive: never = pathConfig;
            return _exhaustive;
        }
    }


}