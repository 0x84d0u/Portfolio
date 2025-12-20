import { DashboardPage, Section } from "@portfolio/ui";
import { fetchExperiences } from "../../../features/experience/action";
import { CreateExperience } from "../../../features/experience/components/CreateExperience";
import { ExperienceType } from "../../../generated/prisma/enums";
import { ReadExperience } from "../../../features/experience/components/ReadExperience";

export default async function WorkPage() {
    const experiences = await fetchExperiences();

    return <DashboardPage
        title="Experience"
        buttons={<>
            <CreateExperience type={ExperienceType.work} />
            <CreateExperience type={ExperienceType.education} />
            <CreateExperience type={ExperienceType.certificate} />
        </>}
    >
        <Section title="Work">
            <div className="flex flex-col gap-6">
                {experiences.filter(i => i.type === ExperienceType.work).map((item, key) => <ReadExperience key={key} data={item} />)}
            </div>
        </Section>
        <Section title="Education">
            <div className="flex flex-col gap-6">
                {experiences.filter(i => i.type === ExperienceType.education).map((item, key) => <ReadExperience key={key} data={item} />)}
            </div>
        </Section>

        <Section title="Certificates">
            <div className="flex flex-col gap-6">
                {experiences.filter(i => i.type === ExperienceType.certificate).map((item, key) => <ReadExperience key={key} data={item} />)}
            </div>
        </Section>
    </DashboardPage>
}