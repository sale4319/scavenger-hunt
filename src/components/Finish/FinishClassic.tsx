import React, { useCallback, useContext, useState } from "react";
import { RoutingContext } from "../../providers/RoutingContext";
import { toast } from "react-toastify";
import { Title } from "../../stories/headers";
import { FaHeartBroken, FaHeart } from "react-icons/fa";
import { GiftButton } from "../../stories/buttons";
import { useLockPrompt } from "../../utils/lockNavigation";
import { EndClassicMessages, PromptMessages } from "../../Messages";

const FinishClassic = () => {
  const [unLockNavigation, setUnlockNavigation] = useState(true);
  const [toggleIcon, setToggleIcon] = useState(true);
  const { routeFinish } = useContext(RoutingContext);

  useLockPrompt(`${PromptMessages.END}`, unLockNavigation);

  const routeChange = useCallback(() => {
    routeFinish();
  }, [unLockNavigation]);

  const notify = () => {
    toast(PromptMessages.THANKS, {
      icon: "🚀",
      position: "top-right",
      pauseOnHover: false,
      draggable: false,
    });
  };

  const handleUnlockNavigation = () => {
    setToggleIcon(!toggleIcon);
    setUnlockNavigation(!toggleIcon);
    notify();
  };

  return (
    <>
      <div>
        <Title
          label={EndClassicMessages.CONGRATS}
          titleSize="medium"
          color="var(--react-blue)"
        />

        <Title
          label={EndClassicMessages.END}
          titleSize="small"
          color="#75F8E2"
        />
      </div>
      {toggleIcon ? (
        <FaHeartBroken
          onClick={handleUnlockNavigation}
          size={50}
          color="red"
          data-testid="unlockButton"
        />
      ) : (
        <FaHeart size={50} color="red" />
      )}
      <div>
        <GiftButton
          label={EndClassicMessages.GIFT}
          primary={toggleIcon}
          size="large"
          onClick={routeChange}
          data-testid="continueButton"
        />
      </div>
    </>
  );
};

export default React.memo(FinishClassic);
