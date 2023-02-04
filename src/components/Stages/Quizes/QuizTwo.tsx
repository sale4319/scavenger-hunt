import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Quiz } from "../../../stories/forms/QuizForm/QuizForm";
import { useLockNoPrompt } from "../../../utils/lockNavigation";
import { PrivateRoutes } from "../../../PrivateRoutes";
import { DefaultMessages } from "../../../Messages";
import { PrimaryButton, SkipButton } from "../../../stories/buttons";
import { questionSetTwo } from "../../../QuizSets";
import { GameSettingsContext } from "../../../providers/GameSettingsContext";

export const QuizTwo = () => {
  const navigate = useNavigate();
  const [unLockNavigation, setUnlockNavigation] = useState<boolean>(true);
  const { skipMode } = useContext(GameSettingsContext);

  useLockNoPrompt(unLockNavigation);

  const routeChange = () => {
    navigate(`${PrivateRoutes.PARAM_LEVEL_TWO}`);
  };

  const handleUnlockNavigation = () => {
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
      <Quiz questions={questionSetTwo} handleUnlock={handleUnlockNavigation} />
      {skipMode && (
        <SkipButton
          onClick={handleUnlockNavigation}
          label={DefaultMessages.SKIP_QUIZ}
        />
      )}
    </>
  );
};
