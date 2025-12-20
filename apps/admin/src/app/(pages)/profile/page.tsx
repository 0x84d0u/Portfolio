import { DashboardPage, Section } from "@portfolio/ui";
import { fetchProfile } from "../../../features/profile/actions";
import UpdateProfile from "../../../features/profile/components/UpdateProfile";

export default async function ProfilePage() {
    const data = await fetchProfile();
    return <DashboardPage
        title="Profile"
    >
        <Section>
            {data && <UpdateProfile data={data} />}
        </Section>
    </DashboardPage>
}