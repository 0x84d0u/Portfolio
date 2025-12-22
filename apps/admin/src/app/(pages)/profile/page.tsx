import { DashboardPage, Section } from "@portfolio/ui";
import { fetchProfile } from "../../../features/profile/actions";
import { CreateProfileForm, DeleteProfileForm, UpdateProfileForm } from "../../../features/profile/components/ProfileForm";

export default async function ProfilePage() {
    const data = await fetchProfile();

    if (!data) {
        return <DashboardPage>
            <Section>
                No profile was found
            </Section>
        </DashboardPage>
    }

    return <DashboardPage
        title="Profile"
    >
        <Section title="Create profile">
            <UpdateProfileForm data={data} />
            <CreateProfileForm  />
            <DeleteProfileForm  />
        </Section>
    </DashboardPage>
}