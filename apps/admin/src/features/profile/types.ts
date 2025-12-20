
import z from 'zod';

export type { ProfileModel } from '../../lib/database'

export const ProfileSchema = z.object({
    firstName: z.string().min(1, "First name is required"),
    lastName: z.string().min(1, "Last name is required"),

    email: z.string().optional().nullable().default(null),
    phone: z.string().optional().nullable().default(null),

    githubUsername: z.string().optional().nullable().default(null),
    linkedinUsername: z.string().optional().nullable().default(null),
    websiteLink: z.string().optional().nullable().default(null),

    availability: z.boolean().optional().default(true),
    headlines: z.array(z.string()).optional().default([]),
});

export const UpdateProfileSchema = ProfileSchema.extend({
    id: z.string().min(1, "ID is required"),
});

export type ProfileFormState = {
    error?: string;
    fieldErrors?: Record<string, string[]>;
    success?: boolean;
};

