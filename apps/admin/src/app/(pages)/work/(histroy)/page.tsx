import { Section } from "@portfolio/ui";
import { WorkCard } from "../../../../features/work/WorkCard";
import { fetchWork } from "../../../../features/work/actions";

export default async function WorkHistroyPage() {
    const data = await fetchWork();
    return <Section>

        <div className="flex flex-col gap-6">
            {data.map((item, key) => {
                return <WorkCard 
                    key={key}
                    data={item}
                />
            })}
        </div>

    </Section>
}