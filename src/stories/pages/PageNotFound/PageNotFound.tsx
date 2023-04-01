import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { GameSettingsContext } from "../../../providers/GameSettingsContext";
import { PrimaryButton } from "../../buttons";
import { PrivateRoutes } from "../../../PrivateRoutes";
import { DefaultMessages } from "../../../Messages";
import "./PageNotFound.css";
import { PlaceHolder } from "../../headers";

export const PageNotFound = () => {
  const { darkMode } = useContext(GameSettingsContext);
  const navigate = useNavigate();
  const routeChange = () => {
    navigate(`${PrivateRoutes.PARAM_START_TIMER}`);
  };

  return (
    <section className={darkMode ? "container-dark " : "container-light"}>
      <PlaceHolder size="medium" />
      <div className="error">{DefaultMessages.FOUR_O_FOUR}</div>
      <br />
      <br />
      <span className="info">{DefaultMessages.PAGE_NOT_FOUND}</span>
      <PlaceHolder size="medium" />
      <PrimaryButton
        onClick={routeChange}
        label={DefaultMessages.FANCY_BUTTON}
        mode="offset"
      />
    </section>
  );
};
