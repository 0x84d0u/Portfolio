"use server";

import { parseFieldValue } from "@portfolio/ui";

export const fakeAction = async (
    prev: { values?: unknown },
    fd: FormData
): Promise<{ values?: unknown }> => {

    const values = {
        "string": {
            text: parseFieldValue(fd, "text").text(),
            textarea: parseFieldValue(fd, "textarea").textarea(),
            checkbox: parseFieldValue(fd, "checkbox").checkbox(),
        },
        "string[]": {
            paragraph: parseFieldValue(fd, "paragraph").paragraph(),
            list: parseFieldValue(fd, "list").list(),
            tags: parseFieldValue(fd, "tags").tags(),
            checkboxes: parseFieldValue(fd, "checkboxes").checkboxes()
        },
        "boolean": {
            toggle: parseFieldValue(fd, "toggle").toggle(),
            radio: parseFieldValue(fd, "radio").radio(),
        }
    };

    console.log({ values });
    return {
        values,
    };
};
