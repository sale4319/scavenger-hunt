import React, { useContext } from "react";
import { GameSettingsContext } from "../../../providers/GameSettingsContext";
import "./SkipButton.css";

interface SkipButtonProps {
  label?: string;

  onClick?: () => void;
}

export const SkipButton = ({ label = "skip", ...props }: SkipButtonProps) => {
  const { darkMode } = useContext(GameSettingsContext);
  const mode = darkMode ? "skip-button-dark" : "skip-button-light";
  return (
    <button
      type="button"
      className={["skip-position skip-button", mode].join(" ")}
      {...props}
    >
      <span className="skip-text">{label}</span>
    </button>
  );
};
