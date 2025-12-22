import z from "zod";
import React from "react";
import { resolveZodSchema } from "../zod-resolver";
import { FormWrapper } from "../components/form-wrapper";
import { FormField, FormFieldProps } from "../components/form-field";
import { FormSection } from "../components/form-section";
import { PathSchema, Section } from "../path-dispatcher-dep/types";
import { FormPathDispatcher } from "../path-dispatcher/path-dispatcher";
import { PathDataView } from "../path-dispatcher/types";

type ModelFormActionState = {};

type ModelFormProps<
    Model extends z.ZodObject<any>,
    Sections extends readonly Section[] = readonly Section[]
> = {
    model: Model;
    modelKey: keyof z.infer<Model>;
    createAction?: () => Promise<ModelFormActionState>;
    updateAction?: () => Promise<ModelFormActionState>;
    deleteAction?: () => Promise<ModelFormActionState>;
    sections: Sections;
    schema?: PathSchema<Model, Sections[number]['id']>;
};

export const ModelForm = <
    Model extends z.ZodObject<any>,
    Sections extends readonly Section[]
>({
    model,
    modelKey,
    createAction = async () => ({}),
    updateAction = async () => ({}),
    deleteAction = async () => ({}),
    sections,
    schema = {} as PathSchema<Model, Sections[number]['id']>,
}: ModelFormProps<Model, Sections>) => {
    // Resolve Zod Schema
    const {
        baseZodSchema,
        createZodSchema,
        deleteZodSchema,
        updateZodSchema,
        path,
        paths,
        resolvedSchema
    } = resolveZodSchema({
        model,
        modelKey: modelKey as string,
    });

    const [createState, createActionFn, createPending] = React.useActionState<ModelFormActionState, FormData>(
        async () => {
            return await createAction();
        },
        {}
    );

    const [updateState, updateActionFn, updatePending] = React.useActionState<ModelFormActionState, FormData>(
        async () => {
            return await updateAction();
        },
        {}
    );

    const [deleteState, deleteActionFn, deletePending] = React.useActionState<ModelFormActionState, FormData>(
        async () => {
            return await deleteAction();
        },
        {}
    );

    return (
        <FormWrapper>
            {sections.map((section) => {
                // Get paths assigned to this section
                const sectionPaths = Object.entries(schema).filter(
                    ([_, config]) => (config as any)?.section === section.id
                ) as [keyof z.infer<Model>, any][];

                // Skip empty sections
                if (sectionPaths.length === 0) return null;

                return (
                    <FormSection key={section.id} title={section.label}>
                        {sectionPaths.map(([pathKey, pathConfig]) => {
                            const pathMeta = resolvedSchema[pathKey as string];
                            const fieldConfig = (schema as any)[fieldKey] || {};
                            return (
                                <FormField
                                    key={String(pathKey)}
                                    label={pathMeta?.name || ''}
                                >
                                    <FormPathDispatcher
                                        {...pathMeta}
                                        dataView={(pathConfig?.kind || 'input') as keyof PathDataView}
                                        // value={formValues?.[String(pathKey)] || ""}
                                        // onChange={(val) => setFormValues(prev => ({ ...prev, [pathKey]: val }))}
                                        options={pathConfig?.options}
                                    />
                                </FormField>
                            );
                        })}
                    </FormSection>
                );
            })}
        </FormWrapper>
    );
};