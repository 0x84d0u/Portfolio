import { DashboardPage, Section } from "@portfolio/ui";
import { FakeForm } from "./form";

export default async function Home() {
  return <DashboardPage title="Homepage">
    <Section>
      <FakeForm /> 
    </Section>
  </DashboardPage>
}
