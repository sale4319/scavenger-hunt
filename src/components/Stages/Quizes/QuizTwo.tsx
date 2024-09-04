import { useCallback, useContext, useState } from "react";
import { GameSettingsContext } from "../../../providers/GameSettingsContext";
import { RoutingContext } from "../../../providers/RoutingContext";
import { PrimaryButton, SkipButton } from "../../../stories/buttons";
import { Quiz } from "../../../stories/forms/QuizForm/QuizForm";
import { questionSetTwo } from "../../../QuizSets";

import { DefaultMessages } from "../../../Messages";
import { useLockNoPrompt } from "../../../utils/lockNavigation";

export const QuizTwo = () => {
  const [unLockNavigation, setUnlockNavigation] = useState<boolean>(true);
  const { skipMode } = useContext(GameSettingsContext);
  const { routeQuizTwo } = useContext(RoutingContext);

  useLockNoPrompt(unLockNavigation);

  const routeChange = useCallback(() => {
    routeQuizTwo();
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
