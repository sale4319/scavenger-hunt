// TODO:import React, { useState } from "react";
// TODO:import { useNavigate } from "react-router-dom";
// TODO: import Tippy from "@tippyjs/react";
// TODO:import { StyleSheet, css } from "aphrodite";
// TODO:import { useLock } from "../../util/utils";
import ValidatedForm from "../../util/QuestionMechanism";
// TODO:import { PrivateRoutes } from "../../PrivateRoutes";
import {
  LevelTwoMessages,
  // TODO:PromptMessages,
  // TODO: TooltipMessages,
} from "../../Messages";

// TODO: Styling
// const styles = StyleSheet.create({
//   questionTooltip: {
//     backgroundColor: "#61dafb",
//     color: "#fff",
//     textAlign: "center",
//     padding: "8px",
//     borderRadius: "6px",

//     "::after": {
//       content: '" "',
//       position: "absolute",
//       top: "100%",
//       left: "50%",
//       marginLeft: " -5px",
//       borderWidth: "5px",
//       borderStyle: "solid",
//       borderColor: "#61dafb transparent transparent transparent",
//     },
//   },
//   redButton: {
//     background: "linear-gradient(#eee, #333)",
//     borderStyle: "solid",
//     borderRadius: "9px",
//     cursor: "pointer",
//     padding: "8px",
//     color: "white",
//     ":hover": {
//       background: "linear-gradient(#ff0000, #333)",
//       borderColor: "#ff0000",
//     },

//     "::selection": { background: "transparent" },
//   },

//   greenButton: {
//     background: "linear-gradient(#98fe00, #333)",
//     borderStyle: "solid",
//     borderColor: "#adff2f",
//     borderRadius: "9px",
//     cursor: "pointer",
//     padding: "8px",
//     color: "white",
//     ":hover": {
//       background: "linear-gradient(#333, #98fe00)",
//       borderColor: "#cbf094",
//     },

//     "::selection": { background: "transparent" },
//   },
// });

export const LevelThree = () => {
  // TODO: Navigation
  // const navigate = useNavigate();
  // TODO:Navigation unlock
  //const [unLockNavigation, setUnlockNavigation] = useState(true);

  // TODO:Navigation
  // const routeChange = () => {
  //   navigate(`${PrivateRoutes.PARAM_END_CLASSIC}`);
  // };

  // TODO:Navigation
  //useLock(`${PromptMessages.DEFAULT}`, unLockNavigation);

  // TODO: Navigation unlock
  // const handleUnlockNavigation = () => {
  //   setUnlockNavigation(false);
  // };

  return (
    <div>
      <h3>{LevelTwoMessages.HINT}</h3>
      {/* TODO: <button
        className={css(
          unLockNavigation ? styles.redButton : styles.greenButton
        )}
        onClick={routeChange}
      >
        {LevelTwoMessages.CONTINUE}
      </button> */}
      <div>
        <ValidatedForm />
      </div>
    </div>
  );
};
