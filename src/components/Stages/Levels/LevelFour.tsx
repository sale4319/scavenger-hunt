import React, { useCallback, useContext, useState } from "react";
import { GameSettingsContext } from "../../../providers/GameSettingsContext";
import { RoutingContext } from "../../../providers/RoutingContext";
import { PlaceHolder, Title } from "../../../stories/headers";
import { PrimaryButton, SkipButton } from "../../../stories/buttons";
import { useLockNoPrompt } from "../../../utils/lockNavigation";

import { DefaultMessages, LevelFourMessages } from "../../../Messages";
import DraggingPuzzle from "../../../stories/puzzles/DraggingPuzzle/DraggingPuzzle";

export const LevelFour = () => {
  const [unLockNavigation, setUnlockNavigation] = useState<boolean>(true);
  const { skipMode } = useContext(GameSettingsContext);
  const { routeLevelFour } = useContext(RoutingContext);

  useLockNoPrompt(unLockNavigation);

  const routeChange = useCallback(() => {
    routeLevelFour();
  }, [unLockNavigation]);

  const handleUnlockNavigation = () => {
    setUnlockNavigation(false);
  };

  return (
    <>
      <PlaceHolder size="small" />
      <Title titleSize="medium" label={LevelFourMessages.HINT} />
      <PrimaryButton
        onClick={routeChange}
        primary={unLockNavigation}
        size={"medium"}
        isLocked={unLockNavigation}
        data-testid="continueButton"
      />

      <DraggingPuzzle handleUnlockNavigation={handleUnlockNavigation} />
      {skipMode && (
        <SkipButton
          onClick={handleUnlockNavigation}
          label={DefaultMessages.SKIP_LEVEL}
        />
      )}
    </>
  );
};
