// import React, { useState } from "react";
// import { Formik } from "formik";
// import * as EmailValidator from "email-validator";
// import { string, object } from "yup";
// import { StyleSheet, css } from "aphrodite";
// import { FormMessages } from "../Messages";

// const styles = StyleSheet.create({
//   form: {
//     backgroundColor: "#282c34",
//     marginTop: "10px",
//     textAlign: "center",
//     color: "white",
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//     justifyContent: "center",
//     fontSize: "calc(10px + 2vmin)",
//   },

//   label__input: {
//     display: "block",
//     width: "100%",
//   },

//   label: {
//     marginBottom: "5px",
//     height: "22px",
//   },

//   input: {
//     marginBottom: "20px",
//     padding: "10px",
//     borderRadius: "3px",
//     border: "1px solid #777",
//   },

//   input_error: {
//     marginBottom: "20px",
//     padding: "10px",
//     borderRadius: "3px",
//     border: "1px solid #777",
//     borderColor: "red",
//   },

//   inputFeedback: {
//     color: "rgb(235, 54, 54)",
//     marginTop: "-15px",
//     fontSize: "14px",
//     marginbottom: "20px",
//   },

//   loginButton: {
//     background: "linear-gradient(#61dafb, #333)",
//     borderStyle: "solid",
//     borderColor: "#61dafb",
//     borderRadius: "9px",
//     cursor: "pointer",
//     padding: "8px",
//     color: "white",
//     ":hover": {
//       background: "linear-gradient(#333, #61dafb)",
//       borderColor: "#61dafb",
//     },

//     "::selection": { background: "transparent" },
//   },
// });

// const ValidatedLoginForm = () => (
//   <Formik
//     initialValues={{ email: "", password: "" }}
//     onSubmit={(values, { setSubmitting }) => {
//       setTimeout(() => {
//         console.log("Logging in", values);
//         setSubmitting(false);
//       }, 500);
//     }}
//     //********Handling validation messages yourself*******/
//     // validate={values => {
//     //   let errors = {};
//     //   if (!values.email) {
//     //     errors.email = "Required";
//     //   } else if (!EmailValidator.validate(values.email)) {
//     //     errors.email = "Invalid email address";
//     //   }

//     //   const passwordRegex = /(?=.*[0-9])/;
//     //   if (!values.password) {
//     //     errors.password = "Required";
//     //   } else if (values.password.length < 8) {
//     //     errors.password = "Password must be 8 characters long.";
//     //   } else if (!passwordRegex.test(values.password)) {
//     //     errors.password = "Invalida password. Must contain one number";
//     //   }

//     //   return errors;
//     // }}
//     //********Using Yum for validation********/

//     validationSchema={object().shape({
//       email: string().email().required(`${FormMessages.REQUIRED}`),
//       password: string()
//         .required(`${FormMessages.PASSWORD_REQUIRED}`)
//         .min(8, `${FormMessages.PASSWORD_SHORT}`)
//         .matches(/^nestocemosmisliti$/, `${FormMessages.PASSWORD_NUMBER}`),
//     })}
//   >
//     {(props) => {
//       const {
//         values,
//         touched,
//         errors,
//         isSubmitting,
//         handleChange,
//         handleBlur,
//         handleSubmit,
//       } = props;
//       return (
//         <form className={css(styles.form)} onSubmit={handleSubmit}>
//           <label
//             className={css(styles.label, styles.label__input)}
//             htmlFor="email"
//           >
//             {FormMessages.EMAIL_LABEL}
//           </label>
//           <span className={errors.email && touched.email && "error"}>
//             <input
//               name="email"
//               type="text"
//               placeholder={FormMessages.EMAIL_PLACEHOLDER}
//               value={values.email}
//               onChange={handleChange}
//               onBlur={handleBlur}
//               className={css(
//                 errors.email && touched.email
//                   ? styles.input_error
//                   : styles.input
//               )}
//             />
//             {errors.email && touched.email && (
//               <div className={css(styles.inputFeedback)}>{errors.email}</div>
//             )}
//             <label
//               className={css(styles.label, styles.label__input)}
//               htmlFor="email"
//             >
//               {FormMessages.PASSWORD_LABEL}
//             </label>
//           </span>
//           <span className={errors.password && touched.password && "error"}>
//             <input
//               name="password"
//               type="password"
//               placeholder={FormMessages.PASSWORD_PLACEHOLDER}
//               value={values.password}
//               onChange={handleChange}
//               onBlur={handleBlur}
//               className={css(
//                 errors.password && touched.password
//                   ? styles.input_error
//                   : styles.input
//               )}
//             />
//             {errors.password && touched.password && (
//               <div className={css(styles.inputFeedback)}>{errors.password}</div>
//             )}
//           </span>
//           <button
//             className={css(styles.loginButton)}
//             type="submit"
//             disabled={isSubmitting}
//           >
//             {FormMessages.LOGIN_BUTTON}
//           </button>
//         </form>
//       );
//     }}
//   </Formik>
// );

// export default ValidatedLoginForm;
