import React from "react";
import "./SubmitButton.css";

interface SubmitButtonProps {
  submit?: boolean;
  backgroundColor?: string;
  size?: "small" | "medium" | "large";
  label: string;
  onClick?: () => void;
}

export const SubmitButton = ({
  submit = false,
  size = "medium",
  backgroundColor,
  label,
  ...props
}: SubmitButtonProps) => {
  const mode = submit ? "storybook-button--submit" : "storybook-button--purple";
  return (
    <button
      type="button"
      className={["storybook-button", `storybook-button--${size}`, mode].join(
        " "
      )}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};
