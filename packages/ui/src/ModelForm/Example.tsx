"use client";

import z from "zod"
import { ModelForm } from "./model-form/model-form"

export const ModelFormExample = () => {

    const profileModel = z.object({
        id: z.string(),
        firstName: z.string().min(1, "First name is required"),
        lastName: z.string().min(1, "Last name is required"),

        email: z.string().optional().nullable(),
        phone: z.string().optional().nullable(),

        githubUsername: z.string().optional().nullable(),
        linkedinUsername: z.string().optional().nullable(),
        websiteLink: z.string().optional().nullable(),

        availability: z.boolean().optional().default(true),
        headlines: z.array(z.string()).optional().default([]),
    })

    return <ModelForm
        model={profileModel}
        modelKey="id"
        sections={[
            { id: "personal", label: "Personal information" },
            { id: "contact", label: "Contact" },
            { id: "social", label: "Social Media" },
            { id: "work", label: "Work Availability" },
        ]}
        schema={{
            id: { },
            firstName: { kind: 'text', section: 'personal' },
            lastName: { kind: 'text', section: 'personal' },
            phone: { kind: 'text', section: 'contact' },
            email: { kind: 'text', section: 'contact' },
            websiteLink: { kind: 'text', section: 'contact' },
            githubUsername: { kind: 'text', section: 'social' },
            linkedinUsername: { kind: 'text', section: 'social' },
            availability: { kind: 'text', section: 'work' },
        }}
    />

}
