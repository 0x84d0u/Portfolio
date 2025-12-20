"use client";

import { Field, Form  } from "@portfolio/ui"
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

    return <Form.Wrapper
        error={state.error}
        className={className}
        action={action}
    >

        <Form.Control label="Name" className="grid grid-cols-2">
            <Field.Text name="firstName" placeholder="First name" defaultValue={initialData.firstName} />
            <Field.Text name="lastName" placeholder="Last name" defaultValue={initialData.lastName} />
        </Form.Control>

        <Form.Control label="Contact">
            <Field.Text name="phone" placeholder="Phone" icon="Phone" defaultValue={initialData?.phone || ""} />
            <Field.Text name="email" placeholder="Email" icon="Mail" defaultValue={initialData?.email || ""} />
            <Field.Text name="websiteLink" icon="Satellite" defaultValue={initialData?.websiteLink || ""} />
        </Form.Control>

        <Form.Control label="Social Media">
            <Field.Text name="githubName" icon="Github" defaultValue={initialData?.githubUsername || ""} />
            <Field.Text name="linkedinName" icon="Linkedin" defaultValue={initialData?.linkedinUsername || ""} />
        </Form.Control>

        <Form.Control label="Availability">
            <Field.Toggle name="availability" defaultValue={initialData.availability} label="Available for work ?" />
            {/* <InputTags name="location" icon="Globe" /> */}
        </Form.Control>

    </Form.Wrapper>
}