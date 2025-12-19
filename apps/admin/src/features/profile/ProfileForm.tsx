import { Form, FormControl, InputParagraph, InputTags, InputText, Toggle } from "@portfolio/ui"



type Profile = {
    firstName: string
    lastName: string

    email: string
    phone: string

    githubName: string
    linkedinName?: string
    instagramName?: string
    facebookName?: string

    availability?: boolean
    location?: string[]
}

export const ProfileForm = () => {
    return <Form>

        <FormControl label="Name" className="grid grid-cols-2">
            <InputText name="firstName" placeholder="First name" />
            <InputText name="lastName" placeholder="Last name" />
        </FormControl>

        <FormControl label="Contact">
            <InputText name="phone" placeholder="Phone" icon="Phone" />
            <InputText name="email" placeholder="Email" icon="Mail" />
        </FormControl>

        <FormControl label="Social Media">
            <InputText name="githubName" icon="Github" />
            <InputText name="linkedinName" icon="Linkedin" />
            <InputText name="instagramName" icon="Instagram" />
            <InputText name="facebookName" icon="Facebook" />
        </FormControl>

        <FormControl label="Availability">
            <Toggle name="availability" defaultChecked={true} />
            <InputTags name="location" icon="Globe" />

        </FormControl>

    </Form>
}