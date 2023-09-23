import { useContext } from "react";
import { GameSettingsContext } from "../../../providers/GameSettingsContext";
import "./Title.css";

interface TitleProps {
  label: string;
  color?: string;
  titleSize?: "small" | "medium" | "large";
}

export const Title = ({
  color,
  label = "Your title goes here",
  titleSize = "medium",
  ...props
}: TitleProps) => {
  const { darkMode } = useContext(GameSettingsContext);
  const mode = darkMode ? "title-dark" : "title--light";
  return (
    <header
      className={["title", `title--${titleSize}`, mode].join(" ")}
      style={{ color }}
      {...props}
    >
      {label}
    </header>
  );
};
