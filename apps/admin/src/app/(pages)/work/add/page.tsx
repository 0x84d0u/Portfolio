import { Section } from "@portfolio/ui";
import { WorkForm } from "../../../../features/work/WorkForm";

export default function AddWorkPage() {
    return <Section>
        <WorkForm
            mode="create"            
        />
    </Section>
}