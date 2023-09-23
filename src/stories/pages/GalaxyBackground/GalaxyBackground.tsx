import { useContext } from "react";
import { GameSettingsContext } from "../../../providers/GameSettingsContext";
import "./GalaxyBackground.css";
export const GalaxyBackground = () => {
  const { darkMode } = useContext(GameSettingsContext);
  return (
    <div>
      <div className={["bg", darkMode ? " bg-dark" : " bg-light"].join(" ")} />
      <div className="star-field">
        <div
          className={["layer", darkMode ? " layer-dark" : " layer-light"].join(
            " "
          )}
        />
        <div
          className={["layer", darkMode ? " layer-dark" : " layer-light"].join(
            " "
          )}
        />
        <div
          className={["layer", darkMode ? " layer-dark" : " layer-light"].join(
            " "
          )}
        />
      </div>
    </div>
  );
};
