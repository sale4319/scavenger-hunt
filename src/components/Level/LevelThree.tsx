import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { PrimaryButton } from "../../stories/buttons/";
import { useLockPrompt, useLockNoPrompt } from "../../utils/utils";
import QuestionFormNew from "../../stories/forms/QuestionForm/QuestionForm";
import { PrivateRoutes } from "../../PrivateRoutes";
import { modes } from "../../flags";
import {
  LevelThreeMessages,
  PromptMessages,
  QuestionFormMessages,
  TooltipMessages,
} from "../../Messages";

export const LevelThree = () => {
  const navigate = useNavigate();
  const [unLockNavigation, setUnlockNavigation] = useState(true);

  const routeChange = () => {
    navigate(`${PrivateRoutes.PARAM_END_CLASSIC}`);
  };

  modes.promptMode
    ? useLockPrompt(`${PromptMessages.DEFAULT}`, unLockNavigation)
    : useLockNoPrompt(unLockNavigation);

  const handleUnlockNavigation = () => {
    setUnlockNavigation(false);
  };

  return (
    <div>
      <h3>{LevelThreeMessages.HINT}</h3>
      <PrimaryButton
        onClick={routeChange}
        primary={unLockNavigation}
        size={"small"}
        label={LevelThreeMessages.CONTINUE}
      />

      <QuestionFormNew
        questionIconSize={25}
        handleUnlock={handleUnlockNavigation}
        successMessage={QuestionFormMessages.WOW}
        firstQuestion={QuestionFormMessages.FIRST_Q_LABEL}
        firstHint={TooltipMessages.FIRST_Q_HINT}
        firstPlaceholder={QuestionFormMessages.FIRST_Q_PLACEHOLDER}
        secondQuestion={QuestionFormMessages.SECOND_Q_LABEL}
        secondHint={TooltipMessages.SECOND_Q_HINT}
        secondPlaceholder={QuestionFormMessages.SECOND_Q_PLACEHOLDER}
      />
    </div>
  );
};
