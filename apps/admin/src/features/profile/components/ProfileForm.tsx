"use client";

import { Formidable } from "@portfolio/ui"
import { ProfileModel } from "../types";
import { createProfile2, updateProfile2 } from "../actions";
import z, { ZodBoolean } from "zod";

const formSchema: Formidable.FormSchema = [
    {
        id: 'firstname',
        kind: 'text',
        value: null
    },
    {
        id: 'lastName',
        kind: 'text',
        value: null,
    },
    {
        id: 'phone',
        kind: 'text',
        icon: 'Phone',
        value: null,
    },
    {
        id: 'email',
        kind: 'text',
        icon: 'Mail',
        value: null
    },
    {
        id: 'websiteLink',
        kind: 'text',
        value: null
    },
    {
        id: 'githubUsername',
        kind: 'text',
        icon: 'Github',
        value: null
    },
    {
        id: 'linkedinUsername',
        kind: 'text',
        icon: 'Linkedin',
        value: null
    },
    {
        id: 'availability',
        kind: 'toggle',
        placeholder: "Available for work",
        value: null
    },
]


const validationSchema = z.object({
    firstName: z.string().min(1, "First name is required"),
    lastName: z.string().min(1, "Last name is required"),

    email: z.string().optional().nullable().default(null),
    phone: z.string().optional().nullable().default(null),

    githubUsername: z.string().optional().nullable().default(null),
    linkedinUsername: z.string().optional().nullable().default(null),
    websiteLink: z.string().optional().nullable().default(null),

    availability: z.boolean().optional().default(true),
    headlines: z.array(z.string()).optional().default([]),
})



export const DeleteProfileForm = () => {
    const form = Formidable.use({
        action: createProfile2
    })
    return <Formidable.Wrapper
        {...form.formProps()}
        buttons={[
            { type: 'button', children: "Cancel" },
            { type: 'submit', children: "Delete" },
        ]}
    >
        <div>
            Delete ?
        </div>
    </Formidable.Wrapper>
}

export const CreateProfileForm = () => {
    const form = Formidable.use({
        formSchema: formSchema,
        validationSchema: validationSchema,
        action: createProfile2
    })
    return <AbstractProfileForm form={form} />
}



export const UpdateProfileForm = ({ data }: { data: ProfileModel }) => {

    const form = Formidable.use({
        formSchema: Formidable.mergeFormSchema(formSchema, {
            firstName: { value: "Hello" },
        }),
        hiddenInputs: [
            { id: 'id', value: data.id },
        ],
        validationSchema: validationSchema.extend({
            id: z.string()
        }),
        action: updateProfile2,
    })
    return <AbstractProfileForm form={form} />
}




const AbstractProfileForm = ({ form }: {
    form: Formidable.UseFormReturn
}) => {
    return <Formidable.Wrapper {...form.formProps} >


        <Formidable.Section title="Personal information">

            <Formidable.Field label="First name" {...form.fieldProps('firstname')}>
                <Formidable.Path {...form.pathProps('firstname')} />
            </Formidable.Field>
            <Formidable.Field label="Last name" {...form.fieldProps('firstname', 'lastName')}>
                <Formidable.Path {...form.pathProps('lastName')} />
            </Formidable.Field>
        </Formidable.Section>

        <Formidable.Section title="Contact">
            <Formidable.Field label="Phone number" {...form.fieldProps('phone')}>
                <Formidable.Path {...form.pathProps('phone')} />
            </Formidable.Field>
            <Formidable.Field label="Email" {...form.fieldProps('email')}>
                <Formidable.Path {...form.pathProps('email')} />
            </Formidable.Field>
            <Formidable.Field label="Website" {...form.fieldProps('websiteLink')}>
                <Formidable.Path {...form.pathProps('websiteLink')} />
            </Formidable.Field>
        </Formidable.Section>

        <Formidable.Section title="Social Media">
            <Formidable.Field label="Github" {...form.fieldProps('githubUsername')}>
                <Formidable.Path {...form.pathProps('githubUsername')} />
            </Formidable.Field>

            <Formidable.Field label="LinkedIn" {...form.fieldProps('linkedinUsername')}>
                <Formidable.Path {...form.pathProps('linkedinUsername')} />
            </Formidable.Field>
        </Formidable.Section>


        <Formidable.Section title="Work availability" >

            <Formidable.Field {...form.fieldProps('availability')}>
                <Formidable.Path {...form.pathProps('availability')} />
            </Formidable.Field>

        </Formidable.Section>

    </Formidable.Wrapper>
}


////////////////////////////////////////