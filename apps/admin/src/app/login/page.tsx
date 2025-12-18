import { cn, Page, Section } from "@portfolio/ui";
import { LoginForm } from "../../features/auth/LoginForm";

export default function LoginPage() {
    return <Page> 
        
        <Section>
            <LoginForm />
        </Section>
    </Page>
}