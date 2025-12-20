
import React from "react";
import { IconName } from "../foundation/Icon";

export type FieldState = {
  isDisabled?: boolean
};

// ---------- Wrapper ---------- //

type FieldWrapperLayout = "textarea" | "input" | "toggle";

export type FieldWrapperOwnProps = {
  icon?: IconName;
  start?: React.ReactNode;
  end?: React.ReactNode;
  className?: string;
};

export type FieldWrapperProps = FieldWrapperOwnProps & FieldState & {
  children?: React.ReactNode;
  layout: FieldWrapperLayout;
};

// ---------- Text ---------- //

type TextOwnProps = {
  name: string;
  type?: React.ComponentProps<"input">["type"];
  placeholder?: string;
  defaultValue?: string;
};
export type TextProps = TextOwnProps & FieldWrapperOwnProps & FieldState;

// ---------- TextArea ---------- //

type TextAreaOwnProps = {
  name: string;
  placeholder?: string;
  defaultValue?: string;
  rows?: number;
};
export type TextAreaProps = TextAreaOwnProps & FieldWrapperOwnProps & FieldState;

// ---------- Paragraph ---------- //

type ParagraphOwnProps = {
  name: string;
  placeholder?: string;
  defaultValue?: string[];
  rows?: number;
};
export type ParagraphProps = ParagraphOwnProps & FieldWrapperOwnProps & FieldState;

// ---------- Tags ---------- //

type TagsOwnProps = {
  name: string;
  placeholder?: string;
  defaultValue?: string[];
};
export type TagsProps = TagsOwnProps & FieldWrapperOwnProps & FieldState;

// ---------- List ---------- //

type ListOwnProps = {
  name: string;
  placeholder?: string;
  defaultValue?: string[];
};
export type ListProps = ListOwnProps & FieldWrapperOwnProps & FieldState;

// ---------- Toggle ---------- //

type ToggleOwnProps = {
  name: string;
  label?: string;
  defaultValue?: boolean;
};

export type ToggleProps = ToggleOwnProps & FieldWrapperOwnProps & FieldState;

// ---------- Checkbox ---------- //

type CheckboxOwnProps = {
  name: string;
  label?: string;
  defaultValue?: boolean;
};

export type CheckboxProps = CheckboxOwnProps & FieldWrapperOwnProps & FieldState;


// ---------- Checkboxes ---------- //

type CheckboxesOwnProps = {
  name: string;
  label?: string;
  defaultValue?: string[];
  options: string[]
};

export type CheckboxesProps = CheckboxesOwnProps & FieldWrapperOwnProps & FieldState;


// ---------- Radio ---------- //

type RadioOwnProps = {
  name: string;
  defaultValue?: string[];
  options: { label: string, value: string }[]
};

export type RadioProps = RadioOwnProps & FieldWrapperOwnProps & FieldState;