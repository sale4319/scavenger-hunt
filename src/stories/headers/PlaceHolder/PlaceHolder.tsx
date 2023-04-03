import React, { useContext } from "react";
import { GameSettingsContext } from "../../../providers/GameSettingsContext";
import "./PlaceHolder.css";

interface PlaceHolderProps {
  children?: React.ReactNode;
  size?: "small" | "medium" | "large";
}

export const PlaceHolder = ({
  children,
  size = "medium",
  ...props
}: PlaceHolderProps) => {
  const { darkMode } = useContext(GameSettingsContext);

  return (
    <section
      className={[
        "placeholder-container",
        `placeholder-container--${darkMode ? "dark" : "light"}`,
        `placeholder-container--${size}`,
      ].join(" ")}
    >
      {children}
    </section>
  );
};
