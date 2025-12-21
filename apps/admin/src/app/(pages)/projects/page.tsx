import { DashboardPage, Section } from "@portfolio/ui";
import { ProjectCategory } from "../../../generated/prisma/enums";
import { CreateProject } from "../../../features/project/components/CreateProject";
import { fetchProjects } from "../../../features/project/actions";
import { ReadProject } from "../../../features/project/components/ReadProject";

export default async function ProjectsPage() {
    const projects = await fetchProjects();

    return <DashboardPage
        title="Projects"
        buttons={<>
            <CreateProject />
        </>}
    >
        
        <Section title="Portfolio">
            <div className="flex flex-col gap-6">
                {projects.filter(i => i.category === ProjectCategory.portfolio).map((item, key) => <ReadProject key={key} data={item} />)}
            </div>
        </Section>

        <Section title="Personal">
            <div className="flex flex-col gap-6">
                {projects.filter(i => i.category === ProjectCategory.personal).map((item, key) => <ReadProject key={key} data={item} />)}
            </div>
        </Section>

        <Section title="Professional">
            <div className="flex flex-col gap-6">
                {projects.filter(i => i.category === ProjectCategory.professional).map((item, key) => <ReadProject key={key} data={item} />)}
            </div>
        </Section>

        <Section title="Other">
            <div className="flex flex-col gap-6">
                {projects.filter(i => i.category === ProjectCategory.other).map((item, key) => <ReadProject key={key} data={item} />)}
            </div>
        </Section>
    </DashboardPage>
}