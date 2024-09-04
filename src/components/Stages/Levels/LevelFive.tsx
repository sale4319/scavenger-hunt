import { useCallback, useContext } from "react";
import { RoutingContext } from "../../../providers/RoutingContext";
import { GameSettingsContext } from "../../../providers/GameSettingsContext";
import { PrimaryButton, SkipButton } from "../../../stories/buttons";
import { Title, PlaceHolder } from "../../../stories/headers";

import { isFeatureFlagEnabled } from "../../../utils/featureFlag";
import { DefaultMessages, LevelFiveMessages } from "../../../Messages";

export const LevelFive = () => {
  const { skipMode } = useContext(GameSettingsContext);
  const { routeLevelFive } = useContext(RoutingContext);

  const routeChange = useCallback(() => {
    routeLevelFive();
  }, []);

  return (
    <>
      <PlaceHolder size="large" />

      <Title label={LevelFiveMessages.HINT} />
      {isFeatureFlagEnabled("LEVEL_FIVE_UNLOCK") && (
        <PrimaryButton
          onClick={routeChange}
          primary={false}
          size={"medium"}
          isLocked={false}
          data-testid="continueButton"
        />
      )}
      {skipMode && (
        <SkipButton onClick={routeChange} label={DefaultMessages.SKIP_LEVEL} />
      )}
    </>
  );
};
