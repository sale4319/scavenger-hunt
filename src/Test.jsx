// import React, { useState, useEffect } from "react";
// import { SubmitButton } from "./stories/buttons";
// import { DefaultMessages } from "./Messages";
// import "./Test.css";

// const questions = [
//   {
//     questionText: "Question 1",
//     answerOptions: [
//       { answerText: "Answer 1", isCorrect: true },
//       { answerText: "Answer 2", isCorrect: false },
//       { answerText: "Answer 3", isCorrect: false },
//       { answerText: "Answer 4", isCorrect: false },
//     ],
//   },
//   {
//     questionText: "Question 2",
//     answerOptions: [
//       { answerText: "Answer 1", isCorrect: true },
//       { answerText: "Answer 2", isCorrect: false },
//       { answerText: "Answer 3", isCorrect: false },
//       { answerText: "Answer 4", isCorrect: false },
//     ],
//   },
//   {
//     questionText: "Question 3",
//     answerOptions: [
//       { answerText: "Answer 1", isCorrect: true },
//       { answerText: "Answer 2", isCorrect: false },
//       { answerText: "Answer 3", isCorrect: false },
//       { answerText: "Answer 4", isCorrect: false },
//     ],
//   },
//   {
//     questionText: "Question 4",
//     answerOptions: [
//       { answerText: "Answer 1", isCorrect: true },
//       { answerText: "Answer 2", isCorrect: false },
//       { answerText: "Answer 3", isCorrect: false },
//       { answerText: "Answer 4", isCorrect: false },
//     ],
//   },
// ];

// const submit = () => {
//   console.log("test");
// };
// function Quiz({ handleUnlock }) {
//   const intialValues = { answerOne: "", answerTwo: "" };
//   const [currentQuestion, setCurrentQuestion] = useState(0);
//   const [showScore, setShowScore] = useState(false);
//   const [score, setScore] = useState(0);
//   const [formErrors, setFormErrors] = useState({});
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const handleAnswerButtonClick = (isCorrect) => {
//     if (isCorrect === true) {
//       setScore(score + 1);
//     }

//     const nextQuetions = currentQuestion + 1;
//     if (nextQuetions < questions.length) {
//       setCurrentQuestion(nextQuetions);
//     } else {
//       setShowScore(true);
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setFormErrors(score);
//     setIsSubmitting(true);
//   };

//   // useEffect(() => {
//   //   if (Object.keys(formErrors).length === 1 && isSubmitting) {
//   //     submit();
//   //     handleUnlock();
//   //   }
//   // }, [formErrors]);

//   return (
//     <>
//       {/* {Object.keys(formErrors).length === 1 && isSubmitting && (
//         <span className="success-message">test</span>
//       )} */}
//       <div className="app">
//         {/* <form onSubmit={handleSubmit} noValidate> */}

//         {showScore ? (
//           <div className="score-section">
//             You scored {score} out of {questions.length}
//           </div>
//         ) : (
//           <>
//             <div className="question-section">
//               <div className="question-count">
//                 <span>Question {currentQuestion + 1}</span>/{questions.length}
//               </div>
//               <div className="question-text">
//                 {questions[currentQuestion].questionText}
//               </div>
//             </div>

//             <div className="answer-section">
//               {questions[currentQuestion].answerOptions.map((answerOptions) => (
//                 <button
//                   className="question-section test-button"
//                   onClick={() =>
//                     handleAnswerButtonClick(answerOptions.isCorrect)
//                   }
//                 >
//                   <span className="test-text">{answerOptions.answerText}</span>
//                 </button>
//               ))}
//             </div>
//           </>
//         )}
//       </div>
//       <SubmitButton
//         type="submit"
//         submit={true}
//         size={"small"}
//         label={DefaultMessages.SUBMIT_BUTTON}
//         onClick={handleSubmit}
//       />
//     </>
//   );
// }

// export default Quiz;
