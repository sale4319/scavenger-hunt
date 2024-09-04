import { useCallback, useContext, useState } from "react";
import { GameSettingsContext } from "../../../providers/GameSettingsContext";
import { RoutingContext } from "../../../providers/RoutingContext";
import { PrimaryButton, SkipButton } from "../../../stories/buttons";
import { Quiz } from "../../../stories/forms/QuizForm/QuizForm";
import { questionSetThree } from "../../../QuizSets";

import { useLockNoPrompt } from "../../../utils/lockNavigation";
import { DefaultMessages } from "../../../Messages";

export const QuizThree = () => {
  const [unLockNavigation, setUnlockNavigation] = useState(true);
  const { skipMode } = useContext(GameSettingsContext);
  const { routeQuizThree } = useContext(RoutingContext);

  useLockNoPrompt(unLockNavigation);

  const routeChange = useCallback(() => {
    routeQuizThree();
  }, [unLockNavigation]);

  const handleUnlockNavigation = () => {
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
      <Quiz
        questions={questionSetThree}
        handleUnlock={handleUnlockNavigation}
      />
      {skipMode && (
        <SkipButton
          onClick={handleUnlockNavigation}
          label={DefaultMessages.SKIP_QUIZ}
        />
      )}
    </>
  );
};
