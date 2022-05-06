import React from "react";
import Tippy from "@tippyjs/react";

interface ToolTipProps {
  submit?: boolean;
  content?: string;
  size?: 25 | 30 | 35;
  onClick?: () => void;
}

export const ToolTip = ({
  submit = false,
  size = 30,
  content = "Tooltip text",
  ...props
}: ToolTipProps) => {
  return (
    <Tippy className="question-tooltip" content={content}>
      <button type="button" className="question-button" {...props}></button>
    </Tippy>
  );
};
