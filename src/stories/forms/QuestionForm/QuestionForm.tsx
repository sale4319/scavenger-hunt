import { useState, useEffect, useContext } from "react";
import { QuestionIconToolTip } from "../../tool-tips";
import { PrimaryButton } from "../../buttons";
import { QuestionFormMessages, DefaultMessages } from "../../../Messages";
import { SecretAnswers } from "../../../PrivateRoutes";
import "./QuestionForm.css";
import { GameSettingsContext } from "../../../providers/GameSettingsContext";

type Errors = {
  answerOne: string;
  answerTwo: string;
};

type QuestionFormProps = {
  questionIconSize?: "small" | "medium" | "large";
  handleUnlock?: () => void;
  firstQuestion?: string;
  firstHint?: string;
  firstPlaceholder?: string;
  secondQuestion?: string;
  secondHint?: string;
  secondPlaceholder?: string;
  successMessage?: string;
};

export const QuestionForm = ({
  questionIconSize = "medium",
  handleUnlock,
  firstQuestion = "What is your first question?",
  firstHint = "What is your first hint?",
  firstPlaceholder = "What is your first placeholder?",
  secondQuestion = "What is your second question?",
  secondHint = "What is your second hint?",
  secondPlaceholder = "What is your second placeholder?",
  successMessage = "What is your success message?",
  ...props
}: QuestionFormProps) => {
  const intialValues: Errors = { answerOne: "", answerTwo: "" };

  const [formValues, setFormValues] = useState(intialValues);
  const [formErrors, setFormErrors] = useState<any>({});
  const [touched, setTouched] = useState<any>({});
  const [isTouched, setIsTouched] = useState<any>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { darkMode } = useContext(GameSettingsContext);

  const submit = () => {
    console.log(formValues);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    setTouched(true);
    setIsTouched(true);
  };

  const handleOnBlur = () => {
    setTouched(validate(formValues));
    setFormErrors(validate(true));
  };

  const handleOnBlurSeperate = () => {
    setIsTouched(validate(formValues));
    setFormErrors(validate(true));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setTouched(validate(formValues));
    setIsTouched(validate(formValues));
    setIsSubmitting(true);
  };

  const validate = (values: any) => {
    let errors: any = {};
    const a1 = `${SecretAnswers.ANSWER_ONE}`;
    const a2 = `${SecretAnswers.ANSWER_TWO}`;
    const regex1 = RegExp("^$|^" + a1 + "|^([FG]?\\d{5}|\\d{5}[AB])$");
    const regex2 = RegExp("^$|^" + a2 + "|^([FG]?\\d{5}|\\d{5}[AB])$");

    if (!values.answerOne) {
      errors.answerOne = `${QuestionFormMessages.REQUIRED}`;
    } else if (values.answerOne.length < 4) {
      errors.answerOne = `${QuestionFormMessages.SHORT}`;
    } else if (!regex1.test(values.answerOne)) {
      errors.answerOne = `${QuestionFormMessages.FIRST_Q_WRONG}`;
    }

    if (!values.answerTwo) {
      errors.answerTwo = `${QuestionFormMessages.REQUIRED}`;
    } else if (values.answerTwo.length < 4) {
      errors.answerTwo = `${QuestionFormMessages.SHORT}`;
    } else if (!regex2.test(values.answerTwo)) {
      errors.answerTwo = `${QuestionFormMessages.SECOND_Q_WRONG}`;
    }
    return errors;
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmitting) {
      submit();
      if (handleUnlock) handleUnlock();
    }
  }, [formErrors]);

  return (
    <div
      className={[
        "form-container",
        `form-container--${darkMode ? "dark" : "light"}`,
      ].join(" ")}
    >
      {Object.keys(formErrors).length === 0 && isSubmitting && (
        <span className="success-message">{successMessage}</span>
      )}
      <form onSubmit={handleSubmit} noValidate>
        <div className="form-row">
          <label
            className={[
              "form-label",
              `form-label--${darkMode ? "dark" : "light"}`,
            ].join(" ")}
            htmlFor="answerOne"
          >
            {firstQuestion}
            <QuestionIconToolTip size={questionIconSize} content={firstHint} />
          </label>
          <input
            placeholder={firstPlaceholder}
            type="text"
            name="answerOne"
            id="answerOne"
            value={formValues.answerOne}
            onBlur={handleOnBlur}
            onChange={handleChange}
            className={touched.answerOne ? "form-input-error" : "form-input"}
          />

          <span className="error">
            {formErrors.answerOne && touched.answerOne ? (
              formErrors.answerOne
            ) : (
              <br />
            )}
          </span>
        </div>

        <div className="form-row">
          <label
            className={[
              "form-label",
              `form-label--${darkMode ? "dark" : "light"}`,
            ].join(" ")}
            htmlFor="answerTwo"
          >
            {secondQuestion}
            <QuestionIconToolTip size={questionIconSize} content={secondHint} />
          </label>
          <input
            placeholder={secondPlaceholder}
            type="text"
            name="answerTwo"
            id="answerTwo"
            value={formValues.answerTwo}
            onBlur={handleOnBlurSeperate}
            onChange={handleChange}
            className={isTouched.answerTwo ? "form-input-error" : "form-input"}
          />

          <span className="error">
            {formErrors.answerTwo && isTouched.answerTwo ? (
              formErrors.answerTwo
            ) : (
              <br />
            )}
          </span>
        </div>
        <PrimaryButton
          size={"medium"}
          label={DefaultMessages.SUBMIT_BUTTON}
          buttonType="submit"
          mode="up"
        />
      </form>
    </div>
  );
};
