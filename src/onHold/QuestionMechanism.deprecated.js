import { Formik } from "formik";
import { string, object } from "yup";
import { StyleSheet, css } from "aphrodite";
import { QuestionFormMessages } from "../Messages";

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

  label__input: {
    display: "block",
    width: "100%",
  },

  label: {
    marginBottom: "5px",
    height: "22px",
  },

  input: {
    marginBottom: "20px",
    padding: "10px",
    borderRadius: "3px",
    border: "1px solid #777",
  },

  input_error: {
    marginBottom: "20px",
    padding: "10px",
    borderRadius: "3px",
    border: "1px solid #777",
    borderColor: "red",
  },

  inputFeedback: {
    color: "rgb(235, 54, 54)",
    marginTop: "-15px",
    fontSize: "14px",
    marginbottom: "20px",
  },

  loginButton: {
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
});

const ValidatedForm = (test1) => (
  <Formik
    initialValues={{ email: "", password: "" }}
    onSubmit={(values, { setSubmitting }) => {
      setTimeout(() => {
        const test = !test1;
        console.log(test, values);
        setSubmitting(false);
      }, 500);
    }}
    validationSchema={object().shape({
      email: string()
        .required(`${QuestionFormMessages.REQUIRED}`)
        .min(1, `${QuestionFormMessages.SHORT}`)
        .matches(/^1$/, `${QuestionFormMessages.FIRST_Q_WRONG}`),
      password: string()
        .required(`${QuestionFormMessages.REQUIRED}`)
        .min(1, `${QuestionFormMessages.SHORT}`)
        .matches(/^1$/, `${QuestionFormMessages.SECOND_Q_WRONG}`),
    })}
  >
    {(props) => {
      const {
        values,
        touched,
        errors,
        isSubmitting,
        handleChange,
        handleBlur,
        handleSubmit,
      } = props;
      return (
        <form className={css(styles.form)} onSubmit={handleSubmit}>
          <label
            className={css(styles.label, styles.label__input)}
            htmlFor="email"
          >
            {QuestionFormMessages.FIRST_Q_LABEL}
          </label>
          <span className={errors.email && touched.email && "error"}>
            <input
              name="email"
              type="password"
              placeholder={QuestionFormMessages.FIRST_Q_PLACEHOLDER}
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              className={css(
                errors.email && touched.email
                  ? styles.input_error
                  : styles.input
              )}
            />
            {errors.email && touched.email && (
              <div className={css(styles.inputFeedback)}>{errors.email}</div>
            )}
            <label
              className={css(styles.label, styles.label__input)}
              htmlFor="password"
            >
              {QuestionFormMessages.SECOND_Q_LABEL}
            </label>
          </span>
          <span className={errors.password && touched.password && "error"}>
            <input
              name="password"
              type="password"
              placeholder={QuestionFormMessages.SECOND_Q_PLACEHOLDER}
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              className={css(
                errors.password && touched.password
                  ? styles.input_error
                  : styles.input
              )}
            />
            {errors.password && touched.password && (
              <div className={css(styles.inputFeedback)}>{errors.password}</div>
            )}
          </span>
          <button
            className={css(styles.loginButton)}
            type="submit"
            disabled={isSubmitting}
          >
            {QuestionFormMessages.SUBMIT_BUTTON}
          </button>
        </form>
      );
    }}
  </Formik>
);

export default ValidatedForm;
