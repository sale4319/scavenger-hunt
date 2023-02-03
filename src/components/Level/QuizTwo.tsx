import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Quiz } from "../../stories/forms/QuizForm/QuizForm";
import { useLockNoPrompt } from "../../utils/utils";
import { PrivateRoutes } from "../../PrivateRoutes";
import { modes } from "../../flags";
import { DefaultMessages } from "../../Messages";
import { PrimaryButton, SkipButton } from "../../stories/buttons";
import { questionSetTwo } from "../../QuizSets";

export const QuizTwo = () => {
  const navigate = useNavigate();
  const [unLockNavigation, setUnlockNavigation] = useState(true);

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
        unlock={unLockNavigation}
      />
      <Quiz questions={questionSetTwo} handleUnlock={handleUnlockNavigation} />
      {modes.skipMode && (
        <SkipButton
          onClick={handleUnlockNavigation}
          label={DefaultMessages.SKIP_QUIZ}
        />
      )}
    </>
  );
};
