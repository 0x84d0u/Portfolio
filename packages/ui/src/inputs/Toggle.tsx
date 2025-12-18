"use client";

type ToggleProps = {
  value: boolean;
  onChange: (value: boolean) => void;
};

export const Toggle = ({ value, onChange }: ToggleProps) => {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={value}
      onClick={() => onChange(!value)}
      className={`h-6 w-11 rounded-full transition ${
        value ? "bg-accent" : "bg-gray-300"
      }`}
    >
      <span
        className={`block h-5 w-5 rounded-full bg-white transition ${
          value ? "translate-x-5" : "translate-x-1"
        }`}
      />
    </button>
  );
};
