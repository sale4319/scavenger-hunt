import { createContext, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { GameSettingsContext } from "./GameSettingsContext";

import { PrivateRoutes } from "../PrivateRoutes";

const defaultValues = {
  routeStart: () => {},
  routeLevelOne: () => {},
  routeLevelTwo: () => {},
  routeLevelThree: () => {},
  routeLevelFour: (condition: boolean) => {},
  routeLevelFive: () => {},
  routeLevelSix: () => {},
  routeFinish: () => {},
  routeQuizOne: () => {},
  routeQuizTwo: () => {},
  routeQuizThree: () => {},
  routeQuizFour: (condition: boolean) => {},
};

export const RoutingContext = createContext(defaultValues);

export const RoutingProvider = ({ children }) => {
  const navigate = useNavigate();
  const { quizMode } = useContext(GameSettingsContext);

  const routeStart = () => {
    quizMode
      ? navigate(`${PrivateRoutes.PARAM_QUIZ_ONE}`)
      : navigate(`${PrivateRoutes.PARAM_LEVEL_ONE}`);
  };

  const routeLevelOne = () => {
    quizMode
      ? navigate(`${PrivateRoutes.PARAM_QUIZ_TWO}`)
      : navigate(`${PrivateRoutes.PARAM_LEVEL_TWO}`);
  };

  const routeLevelTwo = () => {
    quizMode
      ? navigate(`${PrivateRoutes.PARAM_QUIZ_THREE}`)
      : navigate(`${PrivateRoutes.PARAM_LEVEL_THREE}`);
  };
  const routeLevelThree = () => {
    quizMode
      ? navigate(`${PrivateRoutes.PARAM_LEVEL_SIX}`)
      : navigate(`${PrivateRoutes.PARAM_LEVEL_SIX}`);
  };

  const routeLevelFour = (condition: boolean) => {
    if (quizMode) {
      navigate(`${PrivateRoutes.PARAM_QUIZ_FOUR}`);
    } else if (condition) {
      navigate(`${PrivateRoutes.PARAM_START_TIMER}`);
    } else if (!condition && !quizMode) {
      navigate(`${PrivateRoutes.PARAM_END_CLASSIC}`);
    }
  };

  const routeLevelFive = () => {
    quizMode
      ? navigate(`${PrivateRoutes.PARAM_LEVEL_FOUR}`)
      : navigate(`${PrivateRoutes.PARAM_LEVEL_FOUR}`);
  };

  const routeLevelSix = () => {
    quizMode
      ? navigate(`${PrivateRoutes.PARAM_LEVEL_FIVE}`)
      : navigate(`${PrivateRoutes.PARAM_LEVEL_FIVE}`);
  };

  const routeFinish = () => {
    navigate(`${PrivateRoutes.PARAM_START_TIMER}`);
  };

  const routeQuizOne = () => {
    navigate(`${PrivateRoutes.PARAM_LEVEL_ONE}`);
  };

  const routeQuizTwo = () => {
    navigate(`${PrivateRoutes.PARAM_LEVEL_TWO}`);
  };

  const routeQuizThree = () => {
    navigate(`${PrivateRoutes.PARAM_LEVEL_THREE}`);
  };

  const routeQuizFour = (condition: boolean) => {
    if (!condition) {
      navigate(`${PrivateRoutes.PARAM_END_CLASSIC}`);
    } else if (condition) {
      navigate(`${PrivateRoutes.PARAM_START_TIMER}`);
    }
  };

  return (
    <RoutingContext.Provider
      value={{
        routeStart,
        routeLevelOne,
        routeLevelTwo,
        routeLevelThree,
        routeLevelFour,
        routeLevelFive,
        routeLevelSix,
        routeFinish,
        routeQuizOne,
        routeQuizTwo,
        routeQuizThree,
        routeQuizFour,
      }}
    >
      {children}
    </RoutingContext.Provider>
  );
};
