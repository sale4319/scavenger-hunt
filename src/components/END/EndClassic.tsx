import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Title } from "../../stories/headers";
import { FaHeartBroken, FaHeart } from "react-icons/fa";
import { GiftButton } from "../../stories/buttons/";
import { useLockPrompt } from "../../utils/utils";
import { PrivateRoutes } from "../../PrivateRoutes";
import { EndClassicMessages, PromptMessages } from "../../Messages";

const EndClassic = () => {
  const navigate = useNavigate();
  const [unLockNavigation, setUnlockNavigation] = useState(true);
  const routeChange = () => {
    navigate(`${PrivateRoutes.PARAM_START_TIMER}`);
  };
  const [toggleIcon, setToggleIcon] = useState(true);
  useEffect(() => {
    if (toggleIcon) {
      return;
    } else {
      toast.success(PromptMessages.THANKS);
    }
  });

  useLockPrompt(`${PromptMessages.END}`, unLockNavigation);

  const handleUnlockNavigation = () => {
    setToggleIcon(!toggleIcon);
    setUnlockNavigation(false);
  };

  return (
    <>
      <Title
        label={EndClassicMessages.CONGRATS}
        titleSize="large"
        color="var(--react-blue)"
      />

      {toggleIcon ? (
        <FaHeartBroken onClick={handleUnlockNavigation} size={50} color="red" />
      ) : (
        <FaHeart onClick={handleUnlockNavigation} size={50} color="red" />
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
