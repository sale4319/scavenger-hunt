import { useCallback, useContext, useState } from "react";
import { GameSettingsContext } from "../../../providers/GameSettingsContext";
import { RoutingContext } from "../../../providers/RoutingContext";
import { PrimaryButton, SkipButton } from "../../../stories/buttons";
import { Quiz } from "../../../stories/forms/QuizForm/QuizForm";
import { questionSetFour } from "../../../QuizSets";

import { useLockNoPrompt } from "../../../utils/lockNavigation";
import { DefaultMessages } from "../../../Messages";

export const QuizFour = () => {
  const [unLockNavigation, setUnlockNavigation] = useState(true);
  const [skip, setSkip] = useState(false);
  const { skipMode } = useContext(GameSettingsContext);
  const { routeQuizFour } = useContext(RoutingContext);

  useLockNoPrompt(unLockNavigation);

  const routeChange = useCallback(() => {
    routeQuizFour(skip);
  }, [unLockNavigation]);

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
        size={"medium"}
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
