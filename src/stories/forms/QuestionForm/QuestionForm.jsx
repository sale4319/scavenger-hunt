/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { QuestionIconToolTip } from "../../tool-tips";
import { SubmitButton } from "../../buttons";
import { QuestionFormMessages } from "../../../Messages";
import { SecretAnswers } from "../../../PrivateRoutes";
import "./QuestionForm.css";

const QuestionForm = ({
  questionIconSize = 30,
  handleUnlock,
  firstQuestion = "What is your first question?",
  firstHint = "What is your first hint?",
  firstPlaceholder = "What is your first placeholder?",
  secondQuestion = "What is your second question?",
  secondHint = "What is your second hint?",
  secondPlaceholder = "What is your second placeholder?",
  successMessage = "What is your success message?",
  ...props
}) => {
  const intialValues = { answerOne: "", answerTwo: "" };

  const [formValues, setFormValues] = useState(intialValues);
  const [formErrors, setFormErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isTouched, setIsTouched] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  const validate = (values) => {
    let errors = {};
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
      handleUnlock();
    }
  }, [formErrors]);

  return (
    <div className="form-container">
      {Object.keys(formErrors).length === 0 && isSubmitting && (
        <span className="success-message">{successMessage}</span>
      )}
      <form onSubmit={handleSubmit} noValidate>
        <div className="form-row">
          <label className="form-label" htmlFor="answerOne">
            {firstQuestion}
            <QuestionIconToolTip
              size={questionIconSize}
              type="button"
              content={firstHint}
            />
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
          {formErrors.answerOne && touched.answerOne && (
            <span className="error">{formErrors.answerOne}</span>
          )}
        </div>

        <div className="form-row">
          <label className="form-label" htmlFor="answerTwo">
            {secondQuestion}
            <QuestionIconToolTip
              size={questionIconSize}
              type="button"
              content={secondHint}
            />
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
          {formErrors.answerTwo && isTouched.answerTwo && (
            <span className="error">{formErrors.answerTwo}</span>
          )}
        </div>

        <SubmitButton
          type="submit"
          submit={true}
          size={"small"}
          label={QuestionFormMessages.SUBMIT_BUTTON}
        />
      </form>
    </div>
  );
};

export default QuestionForm;
