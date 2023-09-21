import Tippy from "@tippyjs/react";
import QuestionIcon from "../../assets/question-icon.svg";
import "./QuestionIconToolTip.css";

interface QuestionIconToolTipProps {
  submit?: boolean;
  content?: string;
  size?: "small" | "medium" | "large";
  onClick?: () => void;
}

export const QuestionIconToolTip = ({
  submit = false,
  size = "medium",
  content = "Tooltip text",
  ...props
}: QuestionIconToolTipProps) => {
  return (
    <Tippy className="question-tooltip" content={content}>
      <button type="button" className="question-button" {...props}>
        <img
          src={QuestionIcon}
          className={["question-icon", `question-icon--${size}`].join(" ")}
          alt="hint"
        />
      </button>
    </Tippy>
  );
};
