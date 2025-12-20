
"use client"

import { useState } from "react"
import { login } from "./actions"
import { FormWrapper, FormControl, InputText } from "@portfolio/ui"

export const LoginForm = () => {
    const [error, setError] = useState("")

    async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
        setError("")

        const form = e.currentTarget
        const res = await login(
            form.email.value,
            form.password.value
        )

        if (res?.error) {
            setError(res.error)
        } else {
            window.location.href = "/admin"
        }
    }

    return <FormWrapper onSubmit={onSubmit} >
        <FormControl label="Email">
            <InputText name="email" type="email" />
        </FormControl>
        <FormControl label="Password">
            <InputText name="password" type="password" required />
        </FormControl>
        {error && <p className="text-red-500">{error}</p>}
    </FormWrapper>
}