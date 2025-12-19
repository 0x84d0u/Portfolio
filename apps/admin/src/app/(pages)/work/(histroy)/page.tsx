import { Section } from "@portfolio/ui";
import { WorkCard } from "../../../../features/work/WorkCard";

export default function WorkHistroyPage() {
    return <Section>

        <div className="flex flex-col gap-6">
            <WorkCard />
            <WorkCard />
            <WorkCard />
        </div>

    </Section>
}