"use client"

import { useActionState, useEffect } from "react";

import { Field, Form, FormState } from "@portfolio/ui";
import { ProjectCategory, ProjectModel, ProjectStatus } from "../types";
import { createProject, updateProject } from "../actions";


type CreateProps = { mode: 'create'; initialData?: never }
type UpdateProps = { mode: 'update'; initialData: ProjectModel }

export type ProjectFormProps = {
    className?: string
    onSuccess?: () => void;
} & (CreateProps | UpdateProps)

export const ProjectForm = ({
    className,
    initialData,
    onSuccess,
    mode,
}: ProjectFormProps) => {

    const serverAction = mode === 'update' ? updateProject : createProject;
    const [state, action] = useActionState<FormState, FormData>(serverAction, {})

    useEffect(() => {
        if (state.success) {
            onSuccess?.();
        }
    }, [state.success, onSuccess]);

    return <Form.Wrapper
        // error={state.error}
        className={className}
        action={action}
        submitText={mode === 'update' ? 'Update' : 'Create'}
    >
        {mode === "update" && <input type="hidden" name="id" value={initialData.id} />}

        <Form.Control label="Title">
            <Field.Text name="title" defaultValue={initialData?.title} />
        </Form.Control>

        <Form.Control label="Short description">
            <Field.TextArea name="desc" defaultValue={initialData?.desc} />
        </Form.Control>

        <Form.Control label="Description">
            <Field.Paragraph name="description" defaultValue={initialData?.description} />
        </Form.Control>

        <Form.Control label="Category">
            <Field.Radio name="category" options={Object.keys(ProjectCategory).map(i => ({ label: i, value: i }))} defaultValue={[initialData?.category || '']} />
        </Form.Control>

        <Form.Control label="Category">
            <Field.Radio name="status" options={Object.keys(ProjectStatus).map(i => ({ label: i, value: i }))} defaultValue={[initialData?.status || '']} />
        </Form.Control>


       <Form.Control label="Image">
            <Field.Text name="imageUrl" defaultValue={initialData?.imageUrl || ""} />
        </Form.Control>

    </Form.Wrapper>
}
