"use client";

import { useActionState } from "react";
import { FormSchema, PathConfig } from "../types/path.types";
import { parsePath } from "./paths";
import z from "zod";
import { FormFieldProps } from "../components/form/field";
import { ActionState, FormParsedValues, UseFormProps, UseFormReturn } from "../types/action.types";
import { FormProps } from "../types/form.types";
import { formatZodErrors, parseFormData, parseFormValidation } from "./action";



export const useForm = <
    const Sch extends FormSchema = FormSchema
>({ 
    formSchema,
    validationSchema,
    action,
    hiddenInputs,
}: UseFormProps<Sch>) : UseFormReturn<Sch> => {

    const schema = (formSchema ?? []) as Sch;

    const [actionState, actionFn, actionPending] =
        useActionState<ActionState, FormData>(
            async (_, fd): Promise<ActionState> => {
                if (!action) return { status: "idle" }

                const values = parseFormData(schema, fd);
                const validation = parseFormValidation(schema, validationSchema).safeParse(values);

                if (!validation.success) return {
                    status: "error",
                    formErrors: ["Validation failed"],
                    pathErrors: formatZodErrors(validation),
                };

                return await action(validation.data as FormParsedValues<Sch>);
            },
            { status: "idle" }
        );


    type PathId = Sch[number]["id"];



    const getPathErrors = (id: PathId): string[] => {
        if (actionState.status === "error" && actionState.pathErrors) {
            return actionState.pathErrors[id] ?? [];
        }
        return [];
    };

    const getFieldErrors = (...ids: PathId[]): string[] => {
        if (actionState.status !== "error") return [];
        return ids.flatMap((id) => getPathErrors(id));
    };

    const getFormErrors = (): string[] => {
        if (actionState.status === "error") {
            return actionState.formErrors ?? [];
        }
        return [];
    };



    const registerPath = <I extends PathId>(id: I) => {
        const pathConfig = schema.find((c) => c.id === id);

        if (!pathConfig) {
            throw new Error("Wrong Path config");
        }

        return {
            ...pathConfig,
            errors: getPathErrors(id),
        } as PathConfig;
    };

    const registerField = (...ids: PathId[]): FormFieldProps => {
        return {
            errors: getFieldErrors(...ids),
        };
    };

    const registerForm = (): FormProps => {
        return {
            action: actionFn,
            errors: getFormErrors(),
            hiddenInputs,
        };
    };


    return {
        pathProps: registerPath,
        fieldProps: registerField,
        formProps: registerForm,

        isSuccess: actionState.status === "success",
        isPending: actionPending,
    };
};
