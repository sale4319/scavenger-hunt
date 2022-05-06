/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { StyleSheet, css } from "aphrodite";
import { QuestionIconToolTip } from "../stories/tool-tips/QuestionIconToolTip/QuestionIconToolTip";
import { SubmitButton } from "../stories/buttons/";
import { QuestionFormMessages, TooltipMessages } from "../Messages";
import { SecretAnswers } from "../PrivateRoutes";

const styles = StyleSheet.create({
  form: {
    backgroundColor: "#282c34",
    marginTop: "10px",
    textAlign: "center",
    color: "white",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "calc(10px + 2vmin)",
  },

  successMsg: {
    color: "white",
    background: "#61dafb",
    display: "inline-block",
    width: "100%",
    textAlign: "center",
    padding: "0.5rem",
    borderRadius: "4px",
    marginBottom: "1rem",
    fontSize: "1.2rem",
    fontWeight: "600",
  },

  label__input: {
    color: "white",
  },

  label: {
    fontSize: "1.2rem",
    marginBottom: "0.5rem",
  },

  input: {
    marginBottom: "20px",
    padding: "10px",
    borderRadius: "3px",
    border: "1px solid #777",

    ":focus": {
      zIndex: 1,
      borderColor: "transparent",
      borderRadius: "3px",
      backgroundColor: "white",
      boxShadow: "5px 10px 18px #61dafb",
      outline: "none",
    },
  },

  formRow: {
    display: "flex",
    flexDirection: "column",
    marginBottom: "1.5rem",
  },

  input_error: {
    marginBottom: "8px",
    padding: "10px",
    borderRadius: "3px",
    border: "1px solid #777",
    borderColor: "red",

    ":focus": {
      zIndex: 1,
      borderColor: "transparent",
      borderRadius: "3px",
      backgroundColor: "white",
      boxShadow: "5px 10px 18px red",
      outline: "none",
    },
    "::placeholder": {
      color: "#ff0000",
    },
  },

  error: {
    color: "#ff0000",
    fontSize: "0.9rem",
    marginTop: "0.3rem",
  },
});

const Form = ({ setUnlockNavigation }) => {
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
      setUnlockNavigation(false);
    }
  }, [formErrors]);

  return (
    <div className={css(styles.form)}>
      {Object.keys(formErrors).length === 0 && isSubmitting && (
        <span className={css(styles.successMsg)}>
          {QuestionFormMessages.WOW}
        </span>
      )}
      <form onSubmit={handleSubmit} noValidate>
        <div className={css(styles.formRow)}>
          <label
            className={css(styles.label, styles.label__input)}
            htmlFor="answerOne"
          >
            {QuestionFormMessages.FIRST_Q_LABEL}
            <QuestionIconToolTip
              size={25}
              type="button"
              content={TooltipMessages.FIRST_Q_HINT}
            />
          </label>
          <input
            placeholder={QuestionFormMessages.FIRST_Q_PLACEHOLDER}
            type="text"
            name="answerOne"
            id="answerOne"
            value={formValues.answerOne}
            onBlur={handleOnBlur}
            onChange={handleChange}
            className={css(
              touched.answerOne ? styles.input_error : styles.input
            )}
          />
          {formErrors.answerOne && touched.answerOne && (
            <span className={css(styles.error)}>{formErrors.answerOne}</span>
          )}
        </div>

        <div className={css(styles.formRow)}>
          <label
            className={css(styles.label, styles.label__input)}
            htmlFor="answerTwo"
          >
            {QuestionFormMessages.SECOND_Q_LABEL}
            <QuestionIconToolTip
              size={25}
              type="button"
              content={TooltipMessages.SECOND_Q_HINT}
            />
          </label>
          <input
            placeholder={QuestionFormMessages.SECOND_Q_PLACEHOLDER}
            type="text"
            name="answerTwo"
            id="answerTwo"
            value={formValues.answerTwo}
            onBlur={handleOnBlurSeperate}
            onChange={handleChange}
            className={css(
              isTouched.answerTwo ? styles.input_error : styles.input
            )}
          />
          {formErrors.answerTwo && isTouched.answerTwo && (
            <span className={css(styles.error)}>{formErrors.answerTwo}</span>
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

export default Form;
