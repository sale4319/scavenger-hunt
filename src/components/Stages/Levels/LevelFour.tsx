import React, { useCallback, useContext, useState } from "react";
import { GameSettingsContext } from "../../../providers/GameSettingsContext";
import { RoutingContext } from "../../../providers/RoutingContext";
import { Title } from "../../../stories/headers";
import { PrimaryButton, SkipButton } from "../../../stories/buttons";
import { useLockNoPrompt } from "../../../utils/lockNavigation";

import { LevelThreeMessages, DefaultMessages } from "../../../Messages";
import SliperyClick from "../../../stories/puzzles/SliperyClick/SliperyClick";

export const LevelFour = () => {
  const [unLockNavigation, setUnlockNavigation] = useState<boolean>(true);
  const [skip, setSkip] = useState(false);
  const { skipMode } = useContext(GameSettingsContext);
  const { routeLevelThree } = useContext(RoutingContext);

  useLockNoPrompt(unLockNavigation);

  const routeChange = useCallback(() => {
    routeLevelThree(skip);
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
      <Title titleSize="small" label={LevelThreeMessages.HINT} />
      <PrimaryButton
        onClick={routeChange}
        primary={unLockNavigation}
        size={"medium"}
        isLocked={unLockNavigation}
        data-testid="continueButton"
      />

      <SliperyClick />
      {skipMode && (
        <SkipButton onClick={handleSkip} label={DefaultMessages.SKIP_LEVEL} />
      )}
    </>
  );
};
