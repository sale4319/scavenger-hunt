import React from "react";
import Tippy from "@tippyjs/react";
import { BsFillPatchQuestionFill } from "react-icons/bs";
import "./QuestionIconToolTip.css";

interface QuestionIconToolTipProps {
  submit?: boolean;
  content?: string;
  size?: 25 | 30 | 35;
  onClick?: () => void;
}

export const QuestionIconToolTip = ({
  submit = false,
  size = 30,
  content = "Tooltip text",
  ...props
}: QuestionIconToolTipProps) => {
  return (
    <Tippy className="question-tooltip" content={content}>
      <button type="button" className="question-button" {...props}>
        {" "}
        <BsFillPatchQuestionFill size={size} className="question-icon" />
      </button>
    </Tippy>
  );
};
