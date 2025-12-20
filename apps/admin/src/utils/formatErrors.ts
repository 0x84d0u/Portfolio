import z from "zod";

export const formatFieldErrors = (error: z.ZodError): Record<string, string[]> => {
    const treeified = z.treeifyError(error);
    // console.log({ treeified })
    const fieldErrors = Object.entries(treeified).reduce(
        (acc, [key, value]) => {
            if (typeof value === "string") {
                acc[key] = [value];
            } else if (Array.isArray(value)) {
                acc[key] = value;
            } else {
                acc[key] = ["Invalid field"];
            }
            return acc;
        },
        {} as Record<string, string[]>
    );
    // console.log({ fieldErrors })

    return fieldErrors;
};