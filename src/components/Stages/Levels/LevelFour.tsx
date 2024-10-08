import { useCallback, useContext, useState } from "react";
import { GameSettingsContext } from "../../../providers/GameSettingsContext";
import { RoutingContext } from "../../../providers/RoutingContext";
import { Title } from "../../../stories/headers";
import { PrimaryButton, SkipButton } from "../../../stories/buttons";
import { QuestionForm } from "../../../stories/forms";

import { useLockNoPrompt } from "../../../utils/lockNavigation";
import {
  QuestionFormMessages,
  TooltipMessages,
  DefaultMessages,
  LevelFourMessages,
} from "../../../Messages";

export const LevelFour = () => {
  const [unLockNavigation, setUnlockNavigation] = useState<boolean>(true);
  const [skip, setSkip] = useState(false);
  const { skipMode } = useContext(GameSettingsContext);
  const { routeLevelFour } = useContext(RoutingContext);

  useLockNoPrompt(unLockNavigation);

  const routeChange = useCallback(() => {
    routeLevelFour(skip);
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
      <Title titleSize="small" label={LevelFourMessages.HINT} />
      <PrimaryButton
        onClick={routeChange}
        primary={unLockNavigation}
        size={"medium"}
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
    </>
  );
};
