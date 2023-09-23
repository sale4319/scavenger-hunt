import { useCallback, useContext, useState } from "react";
import { LevelThreeMessages, DefaultMessages } from "../../../Messages";
import { GameSettingsContext } from "../../../providers/GameSettingsContext";
import { RoutingContext } from "../../../providers/RoutingContext";
import { PrimaryButton, SkipButton } from "../../../stories/buttons";
import { PlaceHolder, Title } from "../../../stories/headers";
import { useLockNoPrompt } from "../../../utils/lockNavigation";
import ShiftingCircles from "../../../stories/puzzles/ShiftingCircles/ShiftingCircles";

export const LevelSix = () => {
  const [unLockNavigation, setUnlockNavigation] = useState<boolean>(true);
  const { skipMode } = useContext(GameSettingsContext);
  const { routeLevelSix } = useContext(RoutingContext);

  useLockNoPrompt(unLockNavigation);

  const routeChange = useCallback(() => {
    routeLevelSix();
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

      <ShiftingCircles handleUnlockNavigation={handleUnlockNavigation} />
      {skipMode && (
        <SkipButton
          onClick={handleUnlockNavigation}
          label={DefaultMessages.SKIP_LEVEL}
        />
      )}
    </>
  );
};
