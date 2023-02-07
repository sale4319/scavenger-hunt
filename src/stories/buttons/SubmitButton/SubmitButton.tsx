import React from "react";
import "./SubmitButton.css";

interface SubmitButtonProps {
  submit?: boolean;
  backgroundColor?: string;
  size?: "small" | "medium" | "large";
  label: string;
  onClick?: () => void;
  type?: "submit" | "button" | "reset" | undefined;
}

export const SubmitButton = ({
  submit = false,
  size = "medium",
  backgroundColor,
  label,
  ...props
}: SubmitButtonProps) => {
  const mode = submit ? "button-submit--blue" : "glow-on-hover";
  return (
    <button
      type="submit"
      className={["button-submit", `button-submit-${size}`, mode].join(" ")}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};
