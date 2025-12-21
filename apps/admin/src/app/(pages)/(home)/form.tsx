"use client";

import { Field, Form } from "@portfolio/ui";
import { useActionState, useEffect } from "react";
import { fakeAction } from "./action";

export const FakeForm = () => {
  const [formState, formAction] = useActionState<{ values?: unknown }, FormData>(fakeAction, {});

  useEffect(() => {
    if (formState.values) {
      console.log(formState.values)
    }
  }, [formState])

  return (
    <Form.Wrapper action={formAction}>

      <Form.Control label="Text">
        <Field.Text name="text" />
      </Form.Control>

      <Form.Control label="Text Area">
        <Field.TextArea name="textarea" />
      </Form.Control>

      <Form.Control label="Paragraph">
        <Field.Paragraph name="paragraph" />
      </Form.Control>

      <Form.Control label="List">
        <Field.List name="list" />
      </Form.Control>

      <Form.Control label="Tags">
        <Field.Tags name="tags" />
      </Form.Control>

      <Form.Control label="Toggle">
        <Field.Toggle name="toggle" />
      </Form.Control>


      <Form.Control label="Checkbox">
        <Field.Checkbox name="checkbox" />
      </Form.Control>

      <Form.Control label="Checkboxes">
        <Field.Checkboxes name="checkboxes" options={["Option 1", "Option 2", "Option 3"]} />
      </Form.Control>

      <Form.Control label="Radio">
        <Field.Radio name="radio" options={[
          { label: "Option 1", value: "opt1"},
          { label: "Option 2", value: "opt2"},
          { label: "Option 3", value: "opt3"},
        ]} />
      </Form.Control>

    </Form.Wrapper>
  );
};
