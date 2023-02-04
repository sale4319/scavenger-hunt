import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Quiz } from "../../../stories/forms/QuizForm/QuizForm";
import { useLockNoPrompt } from "../../../utils/lockNavigation";
import { PrivateRoutes } from "../../../PrivateRoutes";
import { DefaultMessages } from "../../../Messages";
import { PrimaryButton, SkipButton } from "../../../stories/buttons";
import { questionSetFour } from "../../../QuizSets";
import { GameSettingsContext } from "../../../providers/GameSettingsContext";

export const QuizFour = () => {
  const navigate = useNavigate();
  const [unLockNavigation, setUnlockNavigation] = useState(true);
  const [skip, setSkip] = useState(false);
  const { skipMode } = useContext(GameSettingsContext);

  useLockNoPrompt(unLockNavigation);

  const routeChange = () => {
    if (!skip) {
      navigate(`${PrivateRoutes.PARAM_END_CLASSIC}`);
    } else if (skip) {
      navigate(`${PrivateRoutes.PARAM_START_TIMER}`);
    }
  };

  const handleUnlockNavigation = () => {
    setUnlockNavigation(false);
  };

  const handleSkip = () => {
    setSkip(true);
    setUnlockNavigation(false);
  };

  return (
    <>
      <PrimaryButton
        onClick={routeChange}
        primary={unLockNavigation}
        size={"small"}
        isLocked={unLockNavigation}
        data-testid="continueButton"
      />
      <Quiz questions={questionSetFour} handleUnlock={handleUnlockNavigation} />
      {skipMode && (
        <SkipButton onClick={handleSkip} label={DefaultMessages.SKIP_QUIZ} />
      )}
    </>
  );
};
