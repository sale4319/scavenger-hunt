import { useCallback, useContext } from "react";
import { PrimaryButton, SkipButton } from "../../../stories/buttons";
import { Title, PlaceHolder } from "../../../stories/headers";
import { RoutingContext } from "../../../providers/RoutingContext";
import { GameSettingsContext } from "../../../providers/GameSettingsContext";
import { DefaultMessages, LevelFiveMessages } from "../../../Messages";
import { isFeatureFlagEnabled } from "../../../utils/featureFlag";

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
