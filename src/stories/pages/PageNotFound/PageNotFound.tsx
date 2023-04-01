import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { GameSettingsContext } from "../../../providers/GameSettingsContext";
import { Title } from "../../headers";
import { SubmitButton } from "../../buttons";
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
      <PlaceHolder size="small" />
      <Title label={DefaultMessages.PAGE_NOT_FOUNS} titleSize="large" />
      <SubmitButton
        onClick={routeChange}
        label={DefaultMessages.FANCY_BUTTON}
      />
    </section>
  );
};
