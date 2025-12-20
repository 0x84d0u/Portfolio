"use client"

import { useRouter } from "next/navigation";
import { ProfileForm } from "./ProfileForm";
import { ProfileModel } from "../types";

export default function UpdateProfile({
    data,
}: {
    data: ProfileModel
}) {
    const router = useRouter();

    return <ProfileForm
        initialData={data}
        onSuccess={() => {
            router.refresh();
        }}
    />
}