import React from "react";
import gift from "../../assets/gift.svg";
import "./GiftButton.css";

interface GiftButtonProps {
  primary?: boolean;
  backgroundColor?: string;
  size?: "small" | "medium" | "large";
  label: string;
  onClick?: () => void;
}

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
      className={[
        "gift-button outside_inside",
        `gift-button--${size}`,
        mode,
      ].join(" ")}
      style={{ backgroundColor }}
      {...props}
    >
      <img src={gift} className="gift-logo" alt="gift-logo" /> <br />
      {label}
    </button>
  );
};
