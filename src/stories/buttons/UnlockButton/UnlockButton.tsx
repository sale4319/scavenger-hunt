import React from "react";
import "./UnlockButton.css";

interface UnlockButtonProps {
  unlock?: boolean;
  label?: string;
  onClick?: () => void;
}

export const UnlockButton = ({
  unlock = false,
  label = "Unlock button",
  ...props
}: UnlockButtonProps) => {
  return (
    <button type="button" className="unlock-button" {...props}>
      {label}
    </button>
  );
};
