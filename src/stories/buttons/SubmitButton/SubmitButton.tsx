import React from "react";
import "./SubmitButton.css";

interface SubmitButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  submit?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: "small" | "medium" | "large";
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
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
