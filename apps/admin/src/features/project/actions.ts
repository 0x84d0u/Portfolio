"use server";

import { FormState, parseFieldValue } from "@portfolio/ui";
import { database } from "../../lib/database";
import { ProjectSchema } from "./types";
import { formatFieldErrors } from "../../utils/formatErrors";
import z from "zod";

export const fetchProjects = async () => await database.project.findMany();
export const fetchProjectById = async (id: string) => await database.project.findFirst({ where: { id } });
export const deleteProject = async (id: string) => await database.project.delete({ where: { id } });

const getFormValues = (fd: FormData) => ({
    id: fd.get("id"),
    title: parseFieldValue(fd, 'title').text(),
    desc: parseFieldValue(fd, 'desc').textarea(),
    description: parseFieldValue(fd, 'description').paragraph(),
    category: parseFieldValue(fd, 'category').radio(),
    status: parseFieldValue(fd, 'status').radio(),
    imageUrl: parseFieldValue(fd, 'imageUrl').text(),
})


export const createProject = async (prev: FormState, fd: FormData) : Promise<FormState> => {
    const parsed = ProjectSchema.safeParse(getFormValues(fd));

    if (!parsed.success) {
        return { error: "Validation failed", fieldErrors: formatFieldErrors(parsed.error), };
    }
    try {
        await database.project.create({ data: parsed.data });
        return { success: true };

    } catch (e: any) {
        return { error: `Failed to create experience: ${e instanceof Error ? e.message : "Unknown error"}` };
    }
}

export const updateProject = async (prev: FormState, fd: FormData) : Promise<FormState> => {
    const parsed = ProjectSchema.extend({ id: z.string() }).safeParse(getFormValues(fd));

    if (!parsed.success) return { error: "Validation failed", fieldErrors: formatFieldErrors(parsed.error), };
    try {
        const { id, ...data } = parsed.data;
        await database.project.update({ where: { id }, data });
        return { success: true };
    } catch (e: any) {
        return { error: `Failed to update experience: ${e instanceof Error ? e.message : "Unknown error"}` };
    }
};
