import { useCallback, useContext, useState } from "react";
import { GameSettingsContext } from "../../../providers/GameSettingsContext";
import { RoutingContext } from "../../../providers/RoutingContext";
import { PlaceHolder, Title } from "../../../stories/headers";
import { PrimaryButton, SkipButton } from "../../../stories/buttons";
import DraggingPuzzle from "../../../stories/puzzles/DraggingPuzzle/DraggingPuzzle";

import { useLockNoPrompt } from "../../../utils/lockNavigation";
import { DefaultMessages, LevelThreeMessages } from "../../../Messages";

export const LevelThree = () => {
  const [unLockNavigation, setUnlockNavigation] = useState<boolean>(true);
  const { skipMode } = useContext(GameSettingsContext);
  const { routeLevelThree } = useContext(RoutingContext);

  useLockNoPrompt(unLockNavigation);

  const routeChange = useCallback(() => {
    routeLevelThree();
  }, [unLockNavigation]);

  const handleUnlockNavigation = () => {
    setUnlockNavigation(false);
  };

  return (
    <>
      <PlaceHolder size="small" />
      <Title titleSize="medium" label={LevelThreeMessages.HINT} />
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
