import React, { useState, useContext, useCallback } from "react";
import { RoutingContext } from "../../providers/RoutingContext";
import { Title } from "../../stories/headers";
import { QuestionIconToolTip } from "../../stories/tool-tips";
import { PrimaryButton } from "../../stories/buttons";
import { CountdownTimer } from "../../stories/timer/CountdownTimer/CountdownTimer";
import { StartTimerMessages, TooltipMessages } from "../../Messages";

export const Start = () => {
  const [unLockNavigation, setUnlockNavigation] = useState(true);
  const { routeStart } = useContext(RoutingContext);

  const routeChange = useCallback(() => {
    routeStart();
  }, [unLockNavigation]);

  const handleunLockNavigation = () => {
    setUnlockNavigation(false);
  };

  return (
    <>
      <Title titleSize="medium" label={StartTimerMessages.TITLE} />

      <Title
        titleSize="small"
        color="#75F8E2"
        label={StartTimerMessages.INSTRUCTION}
      />

      <CountdownTimer />
      <div style={{ display: "flex" }}>
        <Title titleSize="medium" label={StartTimerMessages.HINT} />
        <QuestionIconToolTip
          size="large"
          onClick={handleunLockNavigation}
          content={TooltipMessages.START_HINT}
        />
      </div>

      <br />
      <PrimaryButton
        onClick={unLockNavigation ? handleunLockNavigation : routeChange}
        primary={unLockNavigation}
        size={"medium"}
        isLocked={unLockNavigation}
        data-testid="unlockButton"
      />
    </>
  );
};
