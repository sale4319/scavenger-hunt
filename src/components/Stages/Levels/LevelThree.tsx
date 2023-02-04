import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Title } from "../../../stories/headers";
import { PrimaryButton, SkipButton } from "../../../stories/buttons";
import { useLockNoPrompt } from "../../../utils/lockNavigation";
import { QuestionForm } from "../../../stories/forms";
import { PrivateRoutes } from "../../../PrivateRoutes";
import {
  LevelThreeMessages,
  QuestionFormMessages,
  TooltipMessages,
  DefaultMessages,
} from "../../../Messages";
import { FeatureFlagContext } from "../../../providers/FeatureFlagContext";

export const LevelThree = () => {
  const navigate = useNavigate();
  const [unLockNavigation, setUnlockNavigation] = useState<boolean>(true);
  const [skip, setSkip] = useState(false);
  const { quizMode, skipMode } = useContext(FeatureFlagContext);

  useLockNoPrompt(unLockNavigation);

  const routeChange = () => {
    if (quizMode) {
      navigate(`${PrivateRoutes.PARAM_QUIZ_FOUR}`);
    } else if (skip) {
      navigate(`${PrivateRoutes.PARAM_START_TIMER}`);
    } else if (!skip && !quizMode) {
      navigate(`${PrivateRoutes.PARAM_END_CLASSIC}`);
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
    <div>
      <Title titleSize="small" label={LevelThreeMessages.HINT} />
      <PrimaryButton
        onClick={routeChange}
        primary={unLockNavigation}
        size={"small"}
        isLocked={unLockNavigation}
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
      {skipMode && (
        <SkipButton onClick={handleSkip} label={DefaultMessages.SKIP_LEVEL} />
      )}
    </div>
  );
};
