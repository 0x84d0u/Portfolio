import z from "zod";
import { FormSchema, PathConfig, PathParsedValue } from "./path.types";
import { FormProps } from "./form.types";
import { FormFieldProps } from "../components/form/field";


export type ActionState =
    | {
        status: "idle";
    }
    | {
        status: "success";
    }
    | {
        status: "error";
        formErrors?: string[];
        pathErrors?: Record<string, string[]>;
    };

    export type FormParsedValues<P extends readonly PathConfig[]> = {
    [C in P[number]as C["id"]]: PathParsedValue<C>;
};


export type UseFormProps<
    Sch extends FormSchema = FormSchema
> = {
    formSchema?: Sch;
    validationSchema?: z.ZodObject<any>;
    action?: (data: FormParsedValues<Sch>) => Promise<ActionState>;
    hiddenInputs?: {id: string, value:string}[]
};


export type UseFormReturn<
    Sch extends FormSchema = FormSchema
> = {
    pathProps: <I extends Sch[number]["id"]>(id: I) => PathConfig;
    fieldProps: (...ids: Sch[number]["id"][]) => FormFieldProps;
    formProps: () => FormProps;

    isSuccess: boolean;
    isPending: boolean;
};


