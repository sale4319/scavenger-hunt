import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Quiz } from "../../stories/forms/QuizForm/QuizForm";
import { useLockNoPrompt, useLockPrompt } from "../../utils/utils";
import { PrivateRoutes } from "../../PrivateRoutes";
import { modes } from "../../flags";
import { DefaultMessages, PromptMessages } from "../../Messages";
import { PrimaryButton, SkipButton } from "../../stories/buttons";
import { questionSetFour } from "../../QuizSets";

export const QuizFour = () => {
  const navigate = useNavigate();
  const [unLockNavigation, setUnlockNavigation] = useState(true);

  modes.promptMode
    ? useLockPrompt(`${PromptMessages.DEFAULT}`, unLockNavigation)
    : useLockNoPrompt(unLockNavigation);

  const routeChange = () => {
    navigate(`${PrivateRoutes.PARAM_END_CLASSIC}`);
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
        label={DefaultMessages.CONTINUE_BUTTON}
      />
      <Quiz questions={questionSetFour} handleUnlock={handleUnlockNavigation} />
      {modes.skipMode && (
        <SkipButton
          onClick={handleUnlockNavigation}
          label={DefaultMessages.SKIP_BUTTON}
        />
      )}
    </>
  );
};
