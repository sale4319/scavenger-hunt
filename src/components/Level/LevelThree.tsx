import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Tippy from "@tippyjs/react";
import { StyleSheet, css } from "aphrodite";
import { useLock } from "../../util/utils";
import ValidatedLoginForm from "../../util/LoginMechanism";
import { PrivateRoutes } from "../../PrivateRoutes";
import {
  LevelTwoMessages,
  PromptMessages,
  TooltipMessages,
} from "../../Messages";
import "./styles.css";

const styles = StyleSheet.create({
  questionTooltip: {
    backgroundColor: "#61dafb",
    color: "#fff",
    textAlign: "center",
    padding: "8px",
    borderRadius: "6px",

    "::after": {
      content: '" "',
      position: "absolute",
      top: "100%",
      left: "50%",
      marginLeft: " -5px",
      borderWidth: "5px",
      borderStyle: "solid",
      borderColor: "#61dafb transparent transparent transparent",
    },
  },
  redButton: {
    background: "linear-gradient(#eee, #333)",
    borderStyle: "solid",
    borderRadius: "9px",
    cursor: "pointer",
    padding: "8px",
    color: "white",
    ":hover": {
      background: "linear-gradient(#ff0000, #333)",
      borderColor: "#ff0000",
    },

    "::selection": { background: "transparent" },
  },

  greenButton: {
    background: "linear-gradient(#98fe00, #333)",
    borderStyle: "solid",
    borderColor: "#adff2f",
    borderRadius: "9px",
    cursor: "pointer",
    padding: "8px",
    color: "white",
    ":hover": {
      background: "linear-gradient(#333, #98fe00)",
      borderColor: "#cbf094",
    },

    "::selection": { background: "transparent" },
  },
});

export const LevelThree = () => {
  const navigate = useNavigate();
  const [unLockNavigation, setUnlockNavigation] = useState(true);

  const routeChange = () => {
    navigate(`${PrivateRoutes.PARAM_END_CLASSIC}`);
  };

  useLock(`${PromptMessages.DEFAULT}`, unLockNavigation);

  const handleUnlockNavigation = () => {
    setUnlockNavigation(false);
  };

  return (
    <div>
      <button
        className={css(
          unLockNavigation ? styles.redButton : styles.greenButton
        )}
        onClick={routeChange}
      >
        {LevelTwoMessages.CONTINUE}
      </button>
      <h3>{LevelTwoMessages.HINT}</h3>
      <div>
        <ValidatedLoginForm />
      </div>
    </div>
  );
};
