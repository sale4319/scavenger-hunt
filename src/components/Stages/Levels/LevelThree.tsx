import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Title } from "../../../stories/headers";
import { PrimaryButton, SkipButton } from "../../../stories/buttons";
import {
  useLockNoPrompt,
  useUnlockNoPrompt,
} from "../../../utils/lockNavigation";
import { QuestionForm } from "../../../stories/forms";
import { PrivateRoutes } from "../../../PrivateRoutes";
import { modes } from "../../../flags";
import {
  LevelThreeMessages,
  QuestionFormMessages,
  TooltipMessages,
  DefaultMessages,
} from "../../../Messages";

export const LevelThree = () => {
  const navigate = useNavigate();
  const [unLockNavigation, setUnlockNavigation] = useState(true);
  const [skip, setSkip] = useState(true);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  skip ? useLockNoPrompt(unLockNavigation) : useUnlockNoPrompt(true);

  const routeChange = () => {
    modes.quizMode
      ? navigate(`${PrivateRoutes.PARAM_QUIZ_FOUR}`)
      : navigate(`${PrivateRoutes.PARAM_END_CLASSIC}`);
  };

  const routeSkip = () => {
    modes.quizMode
      ? navigate(`${PrivateRoutes.PARAM_QUIZ_FOUR}`)
      : navigate(`${PrivateRoutes.PARAM_START_TIMER}`);
  };

  const handleUnlockNavigation = () => {
    setUnlockNavigation(false);
  };

  const handleSkip = () => {
    setSkip(false);
  };

  return (
    <div>
      <Title titleSize="small" label={LevelThreeMessages.HINT} />
      <PrimaryButton
        onClick={skip ? routeChange : routeSkip}
        primary={skip && unLockNavigation}
        size={"small"}
        isLocked={skip && unLockNavigation}
        data-testid="continueButton"
      />

      <QuestionForm
        questionIconSize="small"
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
        <SkipButton onClick={handleSkip} label={DefaultMessages.SKIP_LEVEL} />
      )}
    </div>
  );
};
