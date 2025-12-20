"use client"

import { useActionState, useEffect } from "react";
import { ExperienceType } from "../types";
import { ExperienceModel } from "../../../generated/prisma/models";
import { FormState } from "../../../utils/form";
import { createCertificate, createEducation, createWork, updateCertificate, updateEducation, updateWork } from "../action";

import { Field, Form } from "@portfolio/ui";


type CreateProps = { mode: 'create'; initialData?: never }
type UpdateProps = { mode: 'update'; initialData: ExperienceModel }

export type ExperienceFormProps = {
    className?: string
    type: ExperienceType
    onSuccess?: () => void;
} & (CreateProps | UpdateProps)

export const ExperienceForm = ({
    className,
    type,
    initialData,
    onSuccess,
    mode,
}: ExperienceFormProps) => {


    const setServerAction = () => {
        switch (type) {
            case ExperienceType.work: return mode === 'create' ? createWork : updateWork
            case ExperienceType.education: return mode === 'create' ? createEducation : updateEducation
            case ExperienceType.certificate: return mode === 'create' ? createCertificate : updateCertificate
        }
    }

    const [state, action] = useActionState<FormState, FormData>(setServerAction(),{})

    useEffect(() => {
        if (state.success) {
            onSuccess?.();
        }
    }, [state.success, onSuccess]);

    return <Form.Wrapper
        error={state.error}
        className={className}
        action={action}
        submitText={mode === 'update' ? 'Update' : 'Create'}
    >
        {mode === "update" && <input type="hidden" name="id" value={initialData.id} />}
        <div className="bg-red-50">
            {type} - {mode}
        </div>
        <Form.Control label="Title">
            <Field.Text name="title" defaultValue={initialData?.title} />
        </Form.Control>
        <Form.Control label="Description">
            <Field.TextArea name="description" defaultValue={initialData?.description ?? ''} />
        </Form.Control>
        <Form.Control label="Roles">
            <Field.Tags name="roles" icon="Cog" defaultValue={initialData?.roles ?? []} />
        </Form.Control>

        <Form.Control label="Organisation" >
            <Field.Text name="organisation" icon="Building" defaultValue={initialData?.organisation ?? ''} />
        </Form.Control>
        <Form.Control label="Address" >
            <Field.Text name="address" icon="Map" defaultValue={initialData?.address ?? ''} />
        </Form.Control>

        <Form.Control label="Time period">
            <Field.Text name="period" placeholder="Jan 2023 – Dec 2024" defaultValue={initialData?.period ?? ''} />
        </Form.Control>
        {type === ExperienceType.work && <Form.Control label="Location">
            <Field.Radio
                name="location"
                defaultValue={[initialData?.location ?? '']}
                options={[
                    { label: "Work from home", value: "wfh" },
                    { label: "Work from office", value: "wfo" },
                    { label: "Hybrid", value: "hybrid" },
                ]} />
        </Form.Control>}
        {type === ExperienceType.work && <Form.Control label="Contract">
            <Field.Radio
                name="contract"
                defaultValue={[initialData?.contract ?? '']}
                options={[
                    { label: "Full time", value: "full_time" },
                    { label: "Part time", value: "part_time" },
                    { label: "Freelance", value: "freelance" },
                ]} />
        </Form.Control>}

        {type === ExperienceType.certificate && <Form.Control label="Auth link">
            <Field.TextArea name="authLink" defaultValue={initialData?.authLink ?? ''} rows={2} />
        </Form.Control>}
    </Form.Wrapper>
}
