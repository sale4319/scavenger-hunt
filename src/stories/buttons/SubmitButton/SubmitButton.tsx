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
  const mode = submit ? "button-submit--blue" : "button-submit--purple";
  return (
    <button
      type="button"
      className={["button-submit", `button-submit-${size}`, mode].join(" ")}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};
