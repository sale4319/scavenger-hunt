import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { DarkModeContext } from "../../../providers/DarkModeContext";
import { Title } from "../../headers";
import { SubmitButton } from "../../buttons";
import { PrivateRoutes } from "../../../PrivateRoutes";
import "./PageNotFound.css";

export const PageNotFound = () => {
  const { darkMode } = useContext(DarkModeContext);
  const navigate = useNavigate();
  const routeChange = () => {
    navigate(`${PrivateRoutes.PARAM_START_TIMER}`);
  };

  return (
    <article className={darkMode ? "container-dark" : "container-light"}>
      <section
        className={
          darkMode
            ? "page-not-found-container  container-dark "
            : "page-not-found-container  container-light"
        }
      >
        <Title
          label="Ooops... what happened? Here have a fancy button."
          titleSize="large"
        />
        <SubmitButton onClick={routeChange} label="I will take you home" />
      </section>
    </article>
  );
};
