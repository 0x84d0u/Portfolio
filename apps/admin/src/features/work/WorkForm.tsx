"use client"

import { Form, FormControl, InputParagraph, InputTags, InputText, RadioGroup } from "@portfolio/ui"
import { createWork, updateWork, type WorkFormState } from "./actions";
import { Work } from "./types";
import { useFormState } from "react-dom";


type CreateProps = {
    mode: 'create'
    initialData?: never
}

type UpdateProps = {
    mode: 'update'
    initialData: Work
}


export type WorkFormProps = {
    className?: string
} & (CreateProps | UpdateProps)

export const WorkForm = ({
    className,
    initialData,
    mode,
}: WorkFormProps) => {

    const [state, action] = useFormState<WorkFormState, FormData>(
        mode === 'create' ? createWork : updateWork,
        {}
    )


    return <Form
        className={className}
        action={action}
        submitText={mode === 'update' ? 'Update' : 'Create'}
    >
        {mode === "update" && <input type="hidden" name="id" value={initialData.id} />}

        <FormControl label="Title">
            <InputText name="title" defaultValue={initialData?.title} />
        </FormControl>
        <FormControl label="Description">
            <InputParagraph name="description" defaultValue={initialData?.description} />
        </FormControl>
        <FormControl label="Roles">
            <InputTags name="roles" icon="Cog" defaultValue={initialData?.roles} />
        </FormControl>

        <FormControl label="Organisation" >
            <InputText name="organisation" icon="Building" defaultValue={initialData?.organisation} />
        </FormControl>
        <FormControl label="Address" >
            <InputText name="address" icon="Map" defaultValue={initialData?.address} />
        </FormControl>

        <FormControl label="Time period">
            <InputText
                name="period"
                placeholder="Jan 2023 – Dec 2024"
                defaultValue={initialData?.period}
            />
        </FormControl>
        <FormControl label="Location">
            <RadioGroup
                name="location"
                defaultValue={initialData?.location}
                options={[
                    { label: "Work from home", value: "wfh" },
                    { label: "Work from office", value: "wfo" },
                    { label: "Hybrid", value: "hybrid" },
                ]} />
        </FormControl>

        <FormControl label="Contract">
            <RadioGroup
                name="contract"
                defaultValue={initialData?.contract}
                options={[
                    { label: "Full time", value: "full-time" },
                    { label: "Part time", value: "part-time" },
                    { label: "Freelance", value: "freelance" },
                ]} />
        </FormControl>
    </Form>
}
