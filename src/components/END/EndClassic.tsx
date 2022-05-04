import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { SiGithub } from "react-icons/si";
import { toast } from "react-toastify";
import { StyleSheet, css } from "aphrodite";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { useLockPrompt } from "../../utils/utils";
import { PrivateRoutes } from "../../PrivateRoutes";
import { EndClassicMessages, PromptMessages } from "../../Messages";
import logo from "../../logo.svg";

const styles = StyleSheet.create({
  grayButton: {
    backgroundColor: "transparent",
    color: "white",
    border: "none",
    borderRadius: "80px",
    cursor: "pointer",
    padding: "25px",

    ":hover": {
      zIndex: 1,
      backgroundColor: "red",
      borderColor: "#cbf094",
      borderRadius: "80px",
      boxShadow: "5px 10px 15px 20px red",
      outline: "none",
    },

    "::selection": { background: "transparent" },
  },

  colorfulButton: {
    backgroundColor: "transparent",
    color: "white",
    border: "none",
    borderRadius: "80px",
    cursor: "pointer",
    padding: "25px",

    ":hover": {
      background: "#61dafb",
      zIndex: 1,
      borderColor: "transparent",
      borderRadius: "80px",
      boxShadow: "5px 10px 15px 20px #61dafb",
      outline: "none",
    },

    "::selection": { background: "transparent" },
  },

  title: {
    color: "#61dafb",
  },

  heartIcon: {
    color: "red",
    marginBottom: "25px",
  },

  appLogo: {
    height: "40vmin",
    pointerEvents: "none",
    "::selection": { background: "transparent" },
  },

  footerLink: {
    color: "transparent",
    textDecoration: "none",

    ":hover": {
      color: "#61dafb",
    },
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

  useLockPrompt(`${PromptMessages.DEFAULT}`, unLockNavigation);

  const handleUnlockNavigation = () => {
    setToggleIcon(!toggleIcon);
    setUnlockNavigation(false);
  };

  return (
    <>
      <h1 className={css(styles.title)}>{EndClassicMessages.CONGRATS}</h1>
      {toggleIcon ? (
        <AiOutlineHeart
          onClick={handleUnlockNavigation}
          size={70}
          className={css(styles.heartIcon)}
        />
      ) : (
        <AiFillHeart
          onClick={handleUnlockNavigation}
          size={70}
          className={css(styles.heartIcon)}
        />
      )}
      <div>
        <button
          className={css(
            toggleIcon ? styles.grayButton : styles.colorfulButton
          )}
          onClick={routeChange}
        >
          <img src={logo} className={css(styles.appLogo)} alt="logo" /> <br />
          {EndClassicMessages.GIFT}
        </button>
      </div>
      <div>
        <a
          className={css(styles.footerLink)}
          href={EndClassicMessages.GITHUB}
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiGithub size={70} />
        </a>
      </div>
    </>
  );
};

export default React.memo(EndClassic);
