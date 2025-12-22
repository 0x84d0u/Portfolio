import { Formidable } from "@portfolio/ui";


export const profileFormSchema : Formidable.FormSchema = [
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
