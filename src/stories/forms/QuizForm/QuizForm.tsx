import React, { useState, useEffect, Fragment } from "react";
import { QuizFormMessages } from "../../../Messages";
import { PrimaryButton } from "../../buttons";

import styles from "./QuizForm.module.css";

type QuizProps = {
  questions?: {
    question: string;
    answers: string[];
    correctAnswerIndex: number;
  }[];
  handleUnlock?: () => void;
};

type QuestionProps = {
  question: {
    question: string;
    answers: string[];
    correctAnswerIndex: number;
  };
  setAnswerStatus: (isCorrect: boolean) => void;
};

type ProgressBarProps = {
  currentQuestionIndex: number;
  totalQuestionsCount: number;
};

// Question Component
const Question = ({ question, setAnswerStatus }: QuestionProps) => {
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState<number | null>(
    null
  );

  useEffect(() => {
    if (selectedAnswerIndex !== null) {
      setAnswerStatus(selectedAnswerIndex === question.correctAnswerIndex);
    }
  }, [selectedAnswerIndex, question.correctAnswerIndex, setAnswerStatus]);

  useEffect(() => {
    setSelectedAnswerIndex(null);
  }, [question]);

  const getClasses = (index: number) => {
    let classes: string[] = [];
    if (selectedAnswerIndex !== null) {
      if (selectedAnswerIndex === index) {
        classes.push(styles.selected);
      }
      if (index === question.correctAnswerIndex) {
        if (selectedAnswerIndex === index) {
          classes.push(styles.correct);
        } else {
          classes.push(styles.incorrect);
        }
      }
    }
    return classes.join(" ");
  };

  return (
    <div className={styles.question}>
      <div className={styles.questionText}>{question.question}</div>
      <div className={styles.answers}>
        {question.answers.map((answer, index) => (
          <div
            key={index}
            className={`${styles.answer} ${getClasses(index)}`}
            onClick={() =>
              selectedAnswerIndex === null && setSelectedAnswerIndex(index)
            }
          >
            <span className={styles.answerText}>{answer}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

// ProgressBar Component
const ProgressBar: React.FC<ProgressBarProps> = ({
  currentQuestionIndex,
  totalQuestionsCount,
}) => {
  const progressPercentage = (currentQuestionIndex / totalQuestionsCount) * 100;

  return (
    <div className={styles.progressBar}>
      <div className={styles.text}>
        {currentQuestionIndex} answered (
        {totalQuestionsCount - currentQuestionIndex} remaining)
      </div>
      <div
        className={styles.inner}
        style={{ width: `${progressPercentage}%` }}
      />
    </div>
  );
};

// Quiz Component
export const Quiz = ({ questions, handleUnlock }: QuizProps) => {
  const [questionIndex, setQuestionIndex] = useState<number | null>(null);
  const [answerStatus, setAnswerStatus] = useState<boolean | null>(null);
  const [correctAnswerCount, setCorrectAnswerCount] = useState<number>(0);
  const [quizComplete, setQuizComplete] = useState<boolean>(false);

  useEffect(() => {
    setAnswerStatus(null);
  }, [questionIndex]);

  useEffect(() => {
    if (answerStatus) {
      setCorrectAnswerCount((count) => count + 1);
    }
  }, [answerStatus]);

  const onNextClick = () => {
    if (questions && questionIndex === questions.length - 1) {
      setQuizComplete(true);
    } else {
      setQuestionIndex(questionIndex === null ? 0 : questionIndex + 1);
    }
  };

  const onRestartClick = () => {
    setQuizComplete(false);
    setQuestionIndex(null);
    setCorrectAnswerCount(0);
  };

  if (questionIndex === null) {
    return (
      <div className={[styles.quiz, styles["light"]].join(" ")}>
        <h1>{QuizFormMessages.TITLE}</h1>
        <p>{QuizFormMessages.DESCRIPTION}</p>
        <p>
          <PrimaryButton
            mode="up"
            onClick={onNextClick}
            label={QuizFormMessages.START_BUTTON}
            size="medium"
          />
        </p>
      </div>
    );
  }

  return (
    <div className={[styles.quiz, styles["light"]].join(" ")}>
      {quizComplete ? (
        <Fragment>
          <h1>{QuizFormMessages.TITLE_COMPLETE}</h1>
          <p>
            {QuizFormMessages.CORRECT_ANSWERS} {correctAnswerCount}{" "}
            {QuizFormMessages.TOTAL_QUESTIONS} {questions && questions.length}
          </p>
          {questionIndex !== null && correctAnswerCount === 6 ? (
            <p>
              <PrimaryButton
                mode="slide"
                onClick={handleUnlock}
                label={QuizFormMessages.UNLOCK_BUTTON}
                size="medium"
              />
            </p>
          ) : (
            <p>
              <PrimaryButton
                mode="raise"
                onClick={onRestartClick}
                label={QuizFormMessages.RESTART_BUTTON}
                size="medium"
              />
            </p>
          )}
        </Fragment>
      ) : (
        <Fragment>
          <ProgressBar
            currentQuestionIndex={questionIndex + 1}
            totalQuestionsCount={questions?.length || 0}
          />
          <Question
            question={questions![questionIndex]}
            setAnswerStatus={(isCorrect: boolean) => setAnswerStatus(isCorrect)}
          />
          {answerStatus !== null && (
            <div>
              <PrimaryButton
                mode="slide"
                onClick={onNextClick}
                size="medium"
                label={
                  questions && questionIndex === questions.length - 1
                    ? QuizFormMessages.RESULTS_BUTTON
                    : QuizFormMessages.NEXT_BUTTON
                }
              />
            </div>
          )}
        </Fragment>
      )}
    </div>
  );
};
