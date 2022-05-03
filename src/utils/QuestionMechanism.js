/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import Tippy from "@tippyjs/react";
import { BsFillPatchQuestionFill } from "react-icons/bs";
import { StyleSheet, css } from "aphrodite";
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
      outlineColor: "#61dafb",
    },
  },

  questionIcon: {
    color: "#61dafb",
    outline: "none",
  },

  questionButton: {
    background: "transparent",
    padding: "0px",
    border: "none",
  },

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

  formRow: {
    display: "flex",
    flexDirection: "column",
    marginBottom: "1.5rem",
  },

  button: {
    background: "linear-gradient(#61dafb, #333)",
    borderStyle: "solid",
    borderColor: "#61dafb",
    borderRadius: "9px",
    cursor: "pointer",
    padding: "8px",
    color: "white",
    ":hover": {
      background: "linear-gradient(#333, #61dafb)",
      borderColor: "#61dafb",
    },

    "::selection": { background: "transparent" },
  },

  input_error: {
    marginBottom: "20px",
    padding: "10px",
    borderRadius: "3px",
    border: "1px solid #777",
    borderColor: "red",

    ":focus": {
      outlineColor: "red",
    },
  },

  error: {
    color: "#e63946",
    fontSize: "1rem",
    marginTop: "0.3rem",
  },

  disabledBtn: {
    cursor: "not-allowed",
    background: "rgba($primary-color, 0.8)",
  },
});

const Form = ({ setUnlockNavigation }) => {
  const intialValues = { answerOne: "", answerTwo: "" };

  const [formValues, setFormValues] = useState(intialValues);
  const [formErrors, setFormErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const submit = () => {
    console.log(formValues);
  };

  //input change handler
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleOnBlur = (e) => {
    setTouched(validate(formValues));
    setFormErrors(validate(formValues));
  };

  //form submission handler
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setTouched(validate(formValues));
    setIsSubmitting(true);
  };

  //form validation handler
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
      errors.answerOne = `${QuestionFormMessages.SECOND_Q_WRONG}`;
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
            <Tippy
              className={css(styles.questionTooltip)}
              content={TooltipMessages.FIRST_Q_HINT}
            >
              <button className={css(styles.questionButton)}>
                <BsFillPatchQuestionFill
                  size={25}
                  className={css(styles.questionIcon)}
                />
              </button>
            </Tippy>
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
            <span className={css(styles.error, styles.inputFeedback)}>
              {formErrors.answerOne}
            </span>
          )}
        </div>

        <div className={css(styles.formRow)}>
          <label
            className={css(styles.label, styles.label__input)}
            htmlFor="answerTwo"
          >
            {QuestionFormMessages.SECOND_Q_LABEL}
            <Tippy
              className={css(styles.questionTooltip)}
              content={TooltipMessages.SECOND_Q_HINT}
            >
              <button className={css(styles.questionButton)}>
                <BsFillPatchQuestionFill
                  size={25}
                  className={css(styles.questionIcon)}
                />
              </button>
            </Tippy>
          </label>
          <input
            placeholder={QuestionFormMessages.SECOND_Q_PLACEHOLDER}
            type="text"
            name="answerTwo"
            id="answerTwo"
            value={formValues.answerTwo}
            onBlur={handleOnBlur}
            onChange={handleChange}
            className={css(
              formErrors.answerTwo && touched.answerTwo
                ? styles.input_error
                : styles.input
            )}
          />
          {formErrors.answerTwo && touched.answerTwo && (
            <span className={css(styles.error, styles.inputFeedback)}>
              {formErrors.answerTwo}
            </span>
          )}
        </div>

        <button className={css(styles.button)} type="submit">
          {QuestionFormMessages.SUBMIT_BUTTON}
        </button>
      </form>
    </div>
  );
};

export default Form;
