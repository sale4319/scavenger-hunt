import React, { useCallback, useContext, useState } from "react";
import { GameSettingsContext } from "../../../providers/GameSettingsContext";
import { RoutingContext } from "../../../providers/RoutingContext";
import { Title } from "../../../stories/headers";
import { UnlockToolTip } from "../../../stories/tool-tips";
import { PrimaryButton, SkipButton } from "../../../stories/buttons";
import { PlaceHolder } from "../../../stories/headers";
import { useLockNoPrompt } from "../../../utils/lockNavigation";
import {
  LevelTwoMessages,
  TooltipMessages,
  DefaultMessages,
} from "../../../Messages";

export const LevelTwo = () => {
  const [unLockNavigation, setUnlockNavigation] = useState(true);
  const { skipMode } = useContext(GameSettingsContext);
  const { routeLevelTwo } = useContext(RoutingContext);

  useLockNoPrompt(unLockNavigation);

  const routeChange = useCallback(() => {
    routeLevelTwo();
  }, [unLockNavigation]);

  const handleUnlockNavigation = () => {
    setUnlockNavigation(false);
  };

  return (
    <>
      <PlaceHolder size="large">
        <UnlockToolTip
          content={TooltipMessages.LEVEL_TWO_CONGRATS}
          onClick={handleUnlockNavigation}
          data-testid="unlockButton"
        />
      </PlaceHolder>
      <Title label={LevelTwoMessages.HINT} />

      <PrimaryButton
        onClick={routeChange}
        primary={unLockNavigation}
        size={"small"}
        isLocked={unLockNavigation}
        data-testid="continueButton"
      />
      {skipMode && (
        <SkipButton
          onClick={handleUnlockNavigation}
          label={DefaultMessages.SKIP_LEVEL}
        />
      )}
    </>
  );
};
