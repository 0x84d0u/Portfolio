"use server";

import { Formidable, parseFieldValue } from "@portfolio/ui";
import { database, ProfileModel } from "../../lib/database";
import { formatFieldErrors } from "../../utils/formatErrors";
import { parseFormData } from "../../utils/parseFormData";
import { ProfileFormState, UpdateProfileSchema } from "./types";
import { ActionState } from "../../../../../packages/ui/src/Formidable";

export const fetchProfile = async () => {
    try {
        return await database.profile.findFirst();;
    } catch (e: any) {
        return null
    }
}

// type FieldKind = 'text' | 'textarea' | 'toggle' ...

// type FieldProps = {
//     name: string
//     renderAs: FieldKind,
// }

// const fieldParser = (sch: Record<string, Fieldkind>) => {
//     let values = {};
//     Object.keys(sch).map(path => {
//         const parser = 
//     })
//     return values;
// } 

// const getFormValues = () => {

// }

export const updateProfile2 = async (values: unknown) : Promise<Formidable.ActionState> => {
    try {
        console.log("Updating profile, values received :", values)
        return {
            status: 'success',
        }
    } catch (e: any) {
        return {
            status: 'error',
        }
    }
}

export const createProfile2 = async (values: unknown) : Promise<Formidable.ActionState> => {
    try {
        console.log("Creatung profile, values received :", values)
        return {
            status: 'success',
        }
    } catch (e: any) {
        return {
            status: 'error',
        }
    }
}

export const updateProfile = async (prev: ProfileFormState, fd: FormData) => {
    const values = {
        firstName: parseFieldValue(fd, 'firstName').text(),
        lastName: parseFieldValue(fd, 'lastName').text(),
        phone: parseFieldValue(fd, 'phone').text(),
        email: parseFieldValue(fd, 'email').text(),
        websiteLink: parseFieldValue(fd, 'websiteLink').text(),
        githubUsername: parseFieldValue(fd, 'githubUsername').text(),
        linkedinUsername: parseFieldValue(fd, 'linkedinUsername').text(),
        availability: parseFieldValue(fd, 'availability').toggle(),
    }

    const parsed = UpdateProfileSchema.safeParse(values);

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