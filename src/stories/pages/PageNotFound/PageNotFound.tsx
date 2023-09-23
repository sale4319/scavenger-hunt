import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { GameSettingsContext } from "../../../providers/GameSettingsContext";
import { PlaceHolder } from "../../headers";
import { PrimaryButton } from "../../buttons";

import { PrivateRoutes } from "../../../PrivateRoutes";
import { DefaultMessages } from "../../../Messages";
import "./PageNotFound.css";

export const PageNotFound = () => {
  const { darkMode } = useContext(GameSettingsContext);
  const navigate = useNavigate();
  const routeChange = () => {
    navigate(`${PrivateRoutes.PARAM_START_TIMER}`);
  };

  return (
    <section className={darkMode ? "container-dark " : "container-light"}>
      <PlaceHolder size="medium" />
      <div className="page-error">{DefaultMessages.FOUR_O_FOUR}</div>
      <span className="page-info">{DefaultMessages.PAGE_NOT_FOUND}</span>
      <PlaceHolder size="medium" />
      <PrimaryButton
        onClick={routeChange}
        label={DefaultMessages.FANCY_BUTTON}
        mode="offset"
      />
    </section>
  );
};
