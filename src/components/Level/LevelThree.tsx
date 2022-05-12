import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Title } from "../../stories/headers";
import { PrimaryButton, SkipButton } from "../../stories/buttons/";
import { useLockNoPrompt, useUnlockNoPrompt } from "../../utils/utils";
import { QuestionForm } from "../../stories/forms/";
import { PrivateRoutes } from "../../PrivateRoutes";
import { modes } from "../../flags";
import {
  LevelThreeMessages,
  QuestionFormMessages,
  TooltipMessages,
  DefaultMessages,
} from "../../Messages";

export const LevelThree = () => {
  const navigate = useNavigate();
  const [unLockNavigation, setUnlockNavigation] = useState(true);
  const [skip, setSkip] = useState(true);

  skip ? useLockNoPrompt(unLockNavigation) : useUnlockNoPrompt(true);

  const routeChange = () => {
    navigate(`${PrivateRoutes.PARAM_QUIZ_FOUR}`);
  };

  const routeSkip = () => {
    navigate(`${PrivateRoutes.PARAM_START_TIMER}`);
  };

  const handleSkip = () => {
    setSkip(false);
  };

  const handleUnlockNavigation = () => {
    setUnlockNavigation(false);
  };

  return (
    <div>
      <Title label={LevelThreeMessages.HINT} />
      <PrimaryButton
        onClick={skip ? routeChange : routeSkip}
        primary={skip && unLockNavigation}
        size={"small"}
        label={DefaultMessages.CONTINUE_BUTTON}
      />

      <QuestionForm
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
      {modes.skipMode && (
        <SkipButton onClick={handleSkip} label={DefaultMessages.SKIP_BUTTON} />
      )}
    </div>
  );
};
