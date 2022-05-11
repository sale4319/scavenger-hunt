/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, Fragment } from "react";
import { QuizFormMessages } from "../../../Messages";
import "./QuizForm.css";

const Question = ({ question, setAnswerStatus }) => {
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);

  useEffect(() => {
    if (selectedAnswerIndex != null) {
      setAnswerStatus(selectedAnswerIndex === question.correctAnswerIndex);
    }
  }, [selectedAnswerIndex]);

  useEffect(() => {
    setSelectedAnswerIndex(null);
  }, [question]);

  const getClasses = (index) => {
    let classes = [];
    if (selectedAnswerIndex != null) {
      if (selectedAnswerIndex === index) {
        classes.push("selected");
      }
      if (index === question.correctAnswerIndex) {
        if (selectedAnswerIndex === index) {
          classes.push("correct");
        } else {
          classes.push("incorrect");
        }
      }
    }

    return classes.join(" ");
  };

  return (
    <div className="question">
      <div className="questionText">{question.question}</div>
      <div className="answers">
        {question.answers.map((answer, index) => {
          return (
            <div
              key={index}
              className={` answer ${getClasses(index)}`}
              onClick={() =>
                selectedAnswerIndex == null && setSelectedAnswerIndex(index)
              }
            >
              <span className="answer-text"> {answer}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const ProgressBar = ({ currentQuestionIndex, totalQuestionsCount }) => {
  const progressPercentage = (currentQuestionIndex / totalQuestionsCount) * 100;

  return (
    <div className="progressBar">
      <div className="text">
        {currentQuestionIndex} answered (
        {totalQuestionsCount - currentQuestionIndex} remaining)
      </div>
      <div className="inner" style={{ width: `${progressPercentage}%` }} />
    </div>
  );
};

export const Quiz = ({ questions, handleUnlock }) => {
  const [questionIndex, setQuestionIndex] = useState(null);
  const [answerStatus, setAnswerStatus] = useState(null);
  const [correctAnswerCount, setCorrectAnswerCount] = useState(0);
  const [quizComplete, setQuizComplete] = useState(false);

  useEffect(() => {
    setAnswerStatus(null);
  }, [questionIndex]);

  useEffect(() => {
    if (answerStatus) {
      setCorrectAnswerCount((count) => count + 1);
    }
  }, [answerStatus]);

  const onNextClick = () => {
    if (questionIndex === questions.length - 1) {
      setQuizComplete(true);
    } else {
      setQuestionIndex(questionIndex == null ? 0 : questionIndex + 1);
    }
  };

  const onRestartClick = () => {
    setQuizComplete(false);
    setQuestionIndex(null);
    setCorrectAnswerCount(0);
  };

  if (questionIndex == null) {
    return (
      <div className="quiz">
        <h1>{QuizFormMessages.TITLE}</h1>
        <p>{QuizFormMessages.DESCRIPTION}</p>
        <button className="quiz-button start" onClick={onNextClick}>
          {QuizFormMessages.START_BUTTON}
        </button>
      </div>
    );
  }

  return (
    <div className="quiz">
      {quizComplete ? (
        <Fragment>
          <h1>{QuizFormMessages.TITLE_COMPLETE}</h1>
          <p>
            {QuizFormMessages.CORRECT_ANSWERS}
            {correctAnswerCount}
            {QuizFormMessages.TOTAL_QUESTIONS} {questions.length}
          </p>
          {questionIndex != null && correctAnswerCount === 6 ? (
            <button className="quiz-button restart" onClick={handleUnlock}>
              {QuizFormMessages.UNLOCK_BUTTON}
            </button>
          ) : (
            <button className="quiz-button restart " onClick={onRestartClick}>
              {QuizFormMessages.RESTART_BUTTON}
            </button>
          )}
        </Fragment>
      ) : (
        <Fragment>
          <ProgressBar
            currentQuestionIndex={questionIndex}
            totalQuestionsCount={questions.length}
          />
          <Question
            question={questions[questionIndex]}
            setAnswerStatus={setAnswerStatus}
          />
          {answerStatus != null && (
            <div>
              <button className="quiz-button next" onClick={onNextClick}>
                {questionIndex === questions.length - 1
                  ? `${QuizFormMessages.RESULTS_BUTTON}`
                  : `${QuizFormMessages.NEXT_BUTTON}`}
              </button>
            </div>
          )}
        </Fragment>
      )}
    </div>
  );
};
