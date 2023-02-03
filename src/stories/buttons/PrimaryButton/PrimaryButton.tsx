import React from "react";
import "./PrimaryButton.css";

interface PrimaryButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: "small" | "medium" | "large";

  unlock?: boolean;
  /**
   * Button contents
   */
  label?: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const PrimaryButton = ({
  primary = false,
  size = "medium",
  backgroundColor,
  unlock,
  label,
  ...props
}: PrimaryButtonProps) => {
  const mode = primary
    ? "storybook-button--primary"
    : "storybook-button--secondary";
  return (
    <button
      type="button"
      className={["storybook-button", `storybook-button--${size}`, mode].join(
        " "
      )}
      style={{ backgroundColor }}
      {...props}
    >
      {unlock ? "Locked" : unlock === undefined ? label : "Unlocked"}
    </button>
  );
};
