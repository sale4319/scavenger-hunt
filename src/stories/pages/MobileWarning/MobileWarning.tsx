import { useContext } from "react";
import { DefaultMessages } from "../../../Messages";
import { GameSettingsContext } from "../../../providers/GameSettingsContext";
import { GalaxyBackground } from "../GalaxyBackground/GalaxyBackground";
import styles from "./MobileWarning.module.css";

export const MobileWarning = () => {
  const { darkMode } = useContext(GameSettingsContext);
  return (
    <div
      className={[
        styles.mobileViewContainer,
        darkMode ? styles.containerDark : styles.containerLight,
      ].join(" ")}
    >
      {DefaultMessages.MOBILE_VIEW} <GalaxyBackground />
    </div>
  );
};
