
"use client"

import { useState } from "react"
import { login } from "./actions"
import { Form, Field } from "@portfolio/ui"

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

    return <Form.Wrapper onSubmit={onSubmit} >
        <Form.Control label="Email">
            <Field.Text name="email" type="email" />
        </Form.Control>
        <Form.Control label="Password">
            <Field.Text name="password" type="password" />
        </Form.Control>
        {error && <p className="text-red-500">{error}</p>}
    </Form.Wrapper>
}