"use server";

import z from "zod";
import { database } from "../../lib/database";
import { FormState } from "../../utils/form";
import { formatFieldErrors } from "../../utils/formatErrors";
import { parseFormData } from "../../utils/parseFormData";
import { CertificateSchema, EducationSchema, ExperienceType, WorkSchema } from "./types";

export const fetchExperiences = async () => await database.experience.findMany();

export const fetchExperienceById = async (id: string) => await database.experience.findFirst({
    where: { id }
});

export const deleteExperience = async (id: string) => await database.experience.delete({ where: { id } });


// Create 

export const createWork = async (prev: FormState, fd: FormData) => {
    const input = parseFormData(fd);
    const parsed = WorkSchema.safeParse({ ...input, type: ExperienceType.work });
    if (!parsed.success) {
        return { error: "Validation failed", fieldErrors: formatFieldErrors(parsed.error), };
    }
    try {
        await database.experience.create({ data: parsed.data });
        return { success: true };

    } catch (e: any) {
        return { error: `Failed to create experience: ${e instanceof Error ? e.message : "Unknown error"}` };
    }
}

export const createEducation = async (prev: FormState, fd: FormData) => {
    const input = parseFormData(fd);
    const parsed = EducationSchema.safeParse({ ...input, type: ExperienceType.education });
    if (!parsed.success) {
        return { error: "Validation failed", fieldErrors: formatFieldErrors(parsed.error), };
    }
    try {
        await database.experience.create( { data: parsed.data  });
        return { success: true };
    } catch (e: any) {
        return { error: `Failed to create experience: ${e instanceof Error ? e.message : "Unknown error"}` };
    }
}

export const createCertificate = async (prev: FormState, fd: FormData) => {
    const input = parseFormData(fd);
    const parsed = CertificateSchema.safeParse({ ...input, type: ExperienceType.certificate });
    if (!parsed.success) {
        return { error: "Validation failed", fieldErrors: formatFieldErrors(parsed.error), };
    }
    try {
        await database.experience.create( { data: parsed.data  });
        return { success: true };
    } catch (e: any) {
        return { error: `Failed to create experience: ${e instanceof Error ? e.message : "Unknown error"}` };
    }
}

// Update

export const updateWork = async (prev: FormState, fd: FormData) => {
    const input = parseFormData(fd);
    const parsed = WorkSchema.extend({ id: z.string() }).safeParse({ ...input, type: ExperienceType.work });
    if (!parsed.success) return { error: "Validation failed", fieldErrors: formatFieldErrors(parsed.error), };

    try {
        const { id, ...data } = parsed.data;
        await database.experience.update({ where: { id }, data });
        return { success: true };
    } catch (e: any) {
        return { error: `Failed to update experience: ${e instanceof Error ? e.message : "Unknown error"}` };
    }
};

export const updateEducation = async (prev: FormState, fd: FormData) => {
    const input = parseFormData(fd);
    const parsed = EducationSchema.extend({ id: z.string() }).safeParse({ ...input, type: ExperienceType.education });
    if (!parsed.success) return { error: "Validation failed", fieldErrors: formatFieldErrors(parsed.error), };

    try {
        const { id, ...data } = parsed.data;
        await database.experience.update({ where: { id }, data });
        return { success: true };
    } catch (e: any) {
        return { error: `Failed to update experience: ${e instanceof Error ? e.message : "Unknown error"}` };
    }
};


export const updateCertificate = async (prev: FormState, fd: FormData) => {
    const input = parseFormData(fd);
    const parsed = CertificateSchema.extend({ id: z.string() }).safeParse({ ...input, type: ExperienceType.certificate });
    if (!parsed.success) return { error: "Validation failed", fieldErrors: formatFieldErrors(parsed.error), };

    try {
        const { id, ...data } = parsed.data;
        await database.experience.update({ where: { id }, data });
        return { success: true };
    } catch (e: any) {
        return { error: `Failed to update experience: ${e instanceof Error ? e.message : "Unknown error"}` };
    }
};
