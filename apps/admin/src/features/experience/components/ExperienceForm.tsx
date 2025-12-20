"use client"

import { useActionState, useEffect } from "react";
import { Form, FormControl, InputParagraph, InputTags, InputText, RadioGroup } from "@portfolio/ui"
import { ExperienceType } from "../types";
import { ExperienceModel } from "../../../generated/prisma/models";
import { FormState } from "../../../utils/form";
import { createCertificate, createEducation, createWork, updateCertificate, updateEducation, updateWork } from "../action";


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

    return <Form
        error={state.error}
        className={className}
        action={action}
        submitText={mode === 'update' ? 'Update' : 'Create'}
    >
        {mode === "update" && <input type="hidden" name="id" value={initialData.id} />}
        <div className="bg-red-50">
            {type} - {mode}
        </div>
        <FormControl label="Title">
            <InputText name="title" defaultValue={initialData?.title} />
        </FormControl>
        <FormControl label="Description">
            <InputParagraph name="description" defaultValue={initialData?.description ?? ''} />
        </FormControl>
        <FormControl label="Roles">
            <InputTags name="roles" icon="Cog" defaultValue={initialData?.roles ?? []} />
        </FormControl>

        <FormControl label="Organisation" >
            <InputText name="organisation" icon="Building" defaultValue={initialData?.organisation ?? ''} />
        </FormControl>
        <FormControl label="Address" >
            <InputText name="address" icon="Map" defaultValue={initialData?.address ?? ''} />
        </FormControl>

        <FormControl label="Time period">
            <InputText name="period" placeholder="Jan 2023 – Dec 2024" defaultValue={initialData?.period ?? ''} />
        </FormControl>
        {type === ExperienceType.work && <FormControl label="Location">
            <RadioGroup
                name="location"
                defaultValue={initialData?.location ?? ''}
                options={[
                    { label: "Work from home", value: "wfh" },
                    { label: "Work from office", value: "wfo" },
                    { label: "Hybrid", value: "hybrid" },
                ]} />
        </FormControl>}
        {type === ExperienceType.work && <FormControl label="Contract">
            <RadioGroup
                name="contract"
                defaultValue={initialData?.contract ?? ''}
                options={[
                    { label: "Full time", value: "full_time" },
                    { label: "Part time", value: "part_time" },
                    { label: "Freelance", value: "freelance" },
                ]} />
        </FormControl>}

        {type === ExperienceType.certificate && <FormControl label="Auth link">
            <InputParagraph name="authLink" defaultValue={initialData?.authLink ?? ''} rows={2} />
        </FormControl>}
    </Form>
}
