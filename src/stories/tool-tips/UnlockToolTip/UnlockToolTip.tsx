import React from "react";
import "./UnlockToolTip.css";
import Tippy from "@tippyjs/react";

interface UnlockToolTipProps {
  submit?: boolean;
  content?: string;
  size?: number;
  onClick?: () => void;
}

export const UnlockToolTip = ({
  submit = false,
  size = 30,
  content = "Tooltip text",
  ...props
}: UnlockToolTipProps) => {
  return (
    <Tippy className="question-tooltip" content={content}>
      <button type="button" className="tooltip-button" {...props}></button>
    </Tippy>
  );
};
