import React from "react";
import gift from "../../assets/gift.svg";
import "./GiftButton.css";

interface GiftButtonProps {
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
export const GiftButton = ({
  primary = false,
  size = "medium",
  backgroundColor,
  label,
  ...props
}: GiftButtonProps) => {
  const mode = primary ? "gift-button--primary" : "gift-button--secondary";
  return (
    <button
      type="button"
      className={["gift-button", `gift-button--${size}`, mode].join(" ")}
      style={{ backgroundColor }}
      {...props}
    >
      <img src={gift} className="" alt="gift-logo" /> <br />
      {label}
    </button>
  );
};
