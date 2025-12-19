
import { Form, FormControl, FormMode, InputParagraph, InputTags, InputText, RadioGroup, Toggle } from "@portfolio/ui"
import { createWork, updateWork } from "./actions";


type WorkContract = 'full-time' | 'part-time' | 'freelance';
type WorkLocation = 'wfh' | 'wfo' | 'hybrid';
export type Work = {
    
    title: string
    description: string
    roles: string[]

    period: string
    organisation: string
    address: string

    location: WorkLocation
    contract: WorkContract
}

export type WorkFormProps = {
    className?: string
    initialData?: Partial<Work>
    mode?: 'create' | 'update'
}

export const WorkForm = ({
    className,
    initialData,
    mode,
}: WorkFormProps) => {

    const action = async (fd: FormData) => {
        const data: Work = {
            title: fd.get("title") as string,
            description: fd.get("description") as string,
            roles: fd.getAll("roles") as string[],
            period: fd.get("time") as string,
            organisation: fd.get("organisation") as string,
            address: fd.get("address") as string,
            location: fd.get("location") as WorkLocation,
            contract: fd.get("contract") as WorkContract,
        }

        if (mode === 'create') {
            await createWork(data)

        }
        if (mode === 'update') {
            await updateWork(data)

        }
    }


    return <Form className={className} action={action} mode={mode}>
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
