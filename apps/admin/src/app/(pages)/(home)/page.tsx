import { DashboardPage, Section,  ModelFormExample } from "@portfolio/ui";


export default async function Home() {
  return <DashboardPage title="Homepage">
    <Section>
      <ModelFormExample /> 
    </Section>
  </DashboardPage>
}
