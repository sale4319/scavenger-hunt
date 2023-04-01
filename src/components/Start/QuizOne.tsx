import React, { useCallback, useContext, useState } from "react";
import { GameSettingsContext } from "../../providers/GameSettingsContext";
import { RoutingContext } from "../../providers/RoutingContext";
import { Quiz } from "../../stories/forms/QuizForm/QuizForm";
import { useLockNoPrompt } from "../../utils/lockNavigation";
import { DefaultMessages } from "../../Messages";
import { PrimaryButton, SkipButton } from "../../stories/buttons";
import { questionSetOne } from "../../QuizSets";

export const QuizOne = () => {
  const [unLockNavigation, setUnlockNavigation] = useState(true);
  const { skipMode } = useContext(GameSettingsContext);
  const { routeQuizOne } = useContext(RoutingContext);

  useLockNoPrompt(unLockNavigation);

  const routeChange = useCallback(() => {
    routeQuizOne();
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
      <Quiz questions={questionSetOne} handleUnlock={handleUnlockNavigation} />
      {skipMode && (
        <SkipButton
          onClick={handleUnlockNavigation}
          label={DefaultMessages.SKIP_QUIZ}
        />
      )}
    </>
  );
};
