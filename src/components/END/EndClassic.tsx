import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { StyleSheet, css } from "aphrodite";
import { FaHeartBroken, FaHeart } from "react-icons/fa";
import { GiftButton, GithubButton } from "../../stories/buttons/";
import { useLockPrompt } from "../../utils/utils";
import { PrivateRoutes } from "../../PrivateRoutes";
import { EndClassicMessages, PromptMessages } from "../../Messages";

const styles = StyleSheet.create({
  title: {
    color: "#61dafb",
  },

  heartIcon: {
    color: "red",
    marginBottom: "25px",
  },
});

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
      <h1 className={css(styles.title)}>{EndClassicMessages.CONGRATS}</h1>
      {toggleIcon ? (
        <FaHeartBroken
          onClick={handleUnlockNavigation}
          size={50}
          className={css(styles.heartIcon)}
        />
      ) : (
        <FaHeart
          onClick={handleUnlockNavigation}
          size={50}
          className={css(styles.heartIcon)}
        />
      )}
      <div>
        <GiftButton
          label={EndClassicMessages.GIFT}
          primary={toggleIcon}
          size="large"
          onClick={routeChange}
        />
      </div>
      <div>
        <GithubButton
          href={`${EndClassicMessages.GITHUB}`}
          target="_blank"
          rel="noopener noreferrer"
          size={50}
          primary={unLockNavigation}
        />
      </div>
    </>
  );
};

export default React.memo(EndClassic);
