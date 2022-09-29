import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Title } from "../../stories/headers";
import { FaHeartBroken, FaHeart } from "react-icons/fa";
import { GiftButton } from "../../stories/buttons";
import { useLockPrompt } from "../../utils/utils";
import { PrivateRoutes } from "../../PrivateRoutes";
import { EndClassicMessages, PromptMessages } from "../../Messages";

const EndClassic = () => {
  const navigate = useNavigate();
  const [unLockNavigation, setUnlockNavigation] = useState(true);
  const [toggleIcon, setToggleIcon] = useState(true);

  useLockPrompt(`${PromptMessages.END}`, unLockNavigation);

  const routeChange = () => {
    navigate(`${PrivateRoutes.PARAM_START_TIMER}`);
  };

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
        <FaHeartBroken onClick={handleUnlockNavigation} size={50} color="red" />
      ) : (
        <FaHeart size={50} color="red" />
      )}
      <div>
        <GiftButton
          label={EndClassicMessages.GIFT}
          primary={toggleIcon}
          size="large"
          onClick={routeChange}
        />
      </div>
    </>
  );
};

export default React.memo(EndClassic);
