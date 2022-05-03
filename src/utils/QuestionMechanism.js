/* eslint-disable react-hooks/exhaustive-deps */
//TODO: change form style and validation, organize messages, change input fields
import React, { useState, useEffect } from "react";
import { StyleSheet, css } from "aphrodite";

const styles = StyleSheet.create({
  container: {
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
    color: "#1d3557",
    background: "#8fffab",
    display: "inline-block",
    width: "100%",
    textAlign: "center",
    padding: "0.5rem",
    borderRadius: "4px",
    marginBottom: "1rem",
    fontSize: "1.2rem",
    fontWeight: "600",
  },

  h1: {
    fontSize: "2rem",
    color: "#white",
    marginBottom: "2rem",
  },

  label__input: {
    color: "#white",
  },

  label: {
    fontSize: "1.2rem",
    marginBottom: "0.5rem",
  },

  input: {
    border: "2px solid rgba($primary-color, 0.8)",
    borderRadius: "4px",
    padding: "0.5rem 1rem",
    paddingLeft: "1rem",
    fontSize: "1rem",
  },

  formRow: {
    display: "flex",
    flexDirection: "column",
    marginBottom: "1.5rem",
  },

  button: {
    color: "white",
    width: "100%",
    fontSize: "1.4rem",
    background: "#1d3557",
    borderRadius: "4px",
    border: "none",
    cursor: "pointer",
    padding: " 0.4rem 1.2rem",
    marginTop: "0.5rem",

    ":hover": {
      background: "rgba($primary-color, 0.8)",
    },
  },

  input_error: {
    borderColor: "#e63946",
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
  const intialValues = { email: "", password: "" };

  const [formValues, setFormValues] = useState(intialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const submit = () => {
    console.log(formValues);
  };

  //input change handler
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  //form submission handler
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmitting(true);
  };

  //form validation handler
  const validate = (values) => {
    let errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!values.email) {
      errors.email = "Cannot be blank";
    } else if (!regex.test(values.email)) {
      errors.email = "Invalid email format";
    }

    if (!values.password) {
      errors.password = "Cannot be blank";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
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
    <div className={css(styles.container)}>
      {Object.keys(formErrors).length === 0 && isSubmitting && (
        <span className={css(styles.successMsg)}>
          Form submitted successfully
        </span>
      )}
      <form onSubmit={handleSubmit} noValidate>
        <div className={css(styles.formRow)}>
          <label
            className={css(styles.label, styles.label_input)}
            htmlFor="email"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={formValues.email}
            onChange={handleChange}
            className={css(
              styles.input,
              formErrors.email && styles.input_error
            )}
          />
          {formErrors.email && (
            <span className={css(styles.error)}>{formErrors.email}</span>
          )}
        </div>

        <div className={css(styles.formRow)}>
          <label
            className={css(styles.label, styles.label_input)}
            htmlFor="password"
          >
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            value={formValues.password}
            onChange={handleChange}
            className={css(
              styles.input,
              formErrors.password && styles.input_error
            )}
          />
          {formErrors.password && (
            <span className={css(styles.error)}>{formErrors.password}</span>
          )}
        </div>

        <button className={css(styles.button)} type="submit">
          Sign In
        </button>
      </form>
    </div>
  );
};

export default Form;
