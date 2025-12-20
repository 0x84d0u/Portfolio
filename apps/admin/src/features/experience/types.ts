import z from 'zod'
import { ExperienceType, WorkContract, WorkLocation } from '../../generated/prisma/enums'

export { ExperienceType, WorkContract, WorkLocation } from '../../generated/prisma/enums'
export type { ExperienceModel } from '../../generated/prisma/models'

export const WorkSchema = z.object({
    type: z.literal(ExperienceType.work),
    title: z.string().min(1),
    description: z.string().optional().nullable(),
    roles: z.array(z.string()).optional().default([]),
    period: z.string().optional().nullable(),
    organisation: z.string().optional().nullable(),
    address: z.string().optional().nullable(),
    location: z.enum(Object.values(WorkLocation)),
    contract: z.enum(Object.values(WorkContract)),
    authLink: z.undefined(),
});

export const EducationSchema = z.object({
    type: z.literal(ExperienceType.education),
    title: z.string().min(1),
    description: z.string().optional().nullable(),
    roles: z.array(z.string()).optional().default([]),
    period: z.string().optional().nullable(),
    organisation: z.string().optional().nullable(),
    address: z.string().optional().nullable(),
    location: z.undefined(),
    contract: z.undefined(),
    authLink: z.undefined(),
});

export const CertificateSchema = z.object({
    type: z.literal(ExperienceType.certificate),
    title: z.string().min(1),
    description: z.string().optional().nullable(),
    roles: z.array(z.string()).optional().default([]),
    period: z.string().optional().nullable(),
    organisation: z.string().optional().nullable(),
    address: z.string().optional().nullable(),
    location: z.undefined(),
    contract: z.undefined(),
    authLink: z.string().optional().nullable(),
});

export const ExperienceSchema = z.discriminatedUnion("type", [
    WorkSchema,
    EducationSchema,
    CertificateSchema,
]);
