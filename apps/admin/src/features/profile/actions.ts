"use server";

import { database } from "../../lib/database";
import { formatFieldErrors } from "../../utils/formatErrors";
import { parseFormData } from "../../utils/parseFormData";
import { ProfileFormState, UpdateProfileSchema } from "./types";

export const fetchProfile = async () => {
    try {
        return await database.profile.findFirst();;
    } catch (e: any) {
        return null
    }
}

export const updateProfile = async (prev: ProfileFormState, fd: FormData) => {
    const input = parseFormData(fd);

    const parsed = UpdateProfileSchema.safeParse(input);

    if (!parsed.success) return {
        error: "Validation failed",
        fieldErrors: formatFieldErrors(parsed.error),
    };

    try {
        const profile = await fetchProfile();
        if (!profile) return { error: "No profile found in db" }
        await database.profile.update({
            where: { id: profile.id },
            data: parsed.data
        });
        return { success: true };
    } catch (e: any) {
        return { error: `Failed to update profile: ${e instanceof Error ? e.message : "Unknown error"}` };
    }
}