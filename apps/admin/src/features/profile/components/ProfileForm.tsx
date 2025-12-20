"use client";

import { Form, FormControl, InputTags, InputText, Toggle } from "@portfolio/ui"
import { ProfileFormState, ProfileModel } from "../types";
import { updateProfile } from "../actions";
import { useActionState, useEffect } from "react";

export type ProfileFormProps = {
    className?: string
    onSuccess?: () => void;
    initialData: ProfileModel
}


export const ProfileForm = ({
    className,
    initialData,
    onSuccess,
}: ProfileFormProps) => {
    const [state, action] = useActionState<ProfileFormState, FormData>(updateProfile, {})

    useEffect(() => {
        if (state.success) {
            onSuccess?.();
        }
    }, [state.success, onSuccess]);

    return <Form
        error={state.error}
        className={className}
        action={action}
    >

        <FormControl label="Name" className="grid grid-cols-2">
            <InputText name="firstName" placeholder="First name" defaultValue={initialData.firstName} />
            <InputText name="lastName" placeholder="Last name" defaultValue={initialData.lastName} />
        </FormControl>

        <FormControl label="Contact">
            <InputText name="phone" placeholder="Phone" icon="Phone" defaultValue={initialData?.phone || ""} />
            <InputText name="email" placeholder="Email" icon="Mail" defaultValue={initialData?.email || ""} />
            <InputText name="websiteLink" icon="Satellite" defaultValue={initialData?.websiteLink || ""} />
        </FormControl>

        <FormControl label="Social Media">
            <InputText name="githubName" icon="Github" defaultValue={initialData?.githubUsername || ""} />
            <InputText name="linkedinName" icon="Linkedin" defaultValue={initialData?.linkedinUsername || ""} />
        </FormControl>

        <FormControl label="Availability">
            <Toggle name="availability" defaultChecked={initialData.availability} />
            {/* <InputTags name="location" icon="Globe" /> */}
        </FormControl>

    </Form>
}