import { useState, useEffect, Fragment, useContext } from "react";
import { QuizFormMessages } from "../../../Messages";
import { GameSettingsContext } from "../../../providers/GameSettingsContext";
import { PrimaryButton } from "../../buttons";
import "./QuizForm.css";

type QuizProps = {
  questions?: QuestionProps;
  handleUnlock?: () => void;
};

type QuestionProps = {
  question: string;
  answers: string[];
  correctAnswerIndex: number;
}[];

const Question = ({ question, setAnswerStatus }) => {
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState<number | null>(
    null
  );

  useEffect(() => {
    if (selectedAnswerIndex != null) {
      setAnswerStatus(selectedAnswerIndex === question.correctAnswerIndex);
    }
  }, [selectedAnswerIndex]);

  useEffect(() => {
    setSelectedAnswerIndex(null);
  }, [question]);

  const getClasses = (index: number) => {
    let classes: string[] = [];
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
        {question.answers.map((answer: string, index: number) => {
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

export const Quiz = ({ questions, handleUnlock }: QuizProps) => {
  const [questionIndex, setQuestionIndex] = useState<number | null>(null);
  const [answerStatus, setAnswerStatus] = useState<string | null>(null);
  const [correctAnswerCount, setCorrectAnswerCount] = useState<number>(0);
  const [quizComplete, setQuizComplete] = useState<boolean>(false);
  const { darkMode } = useContext(GameSettingsContext);

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
      <div
        className={["quiz", `quiz--${darkMode ? "dark" : "light"}`].join(" ")}
      >
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
    <div className={["quiz", `quiz--${darkMode ? "dark" : "light"}`].join(" ")}>
      {quizComplete ? (
        <Fragment>
          <h1>{QuizFormMessages.TITLE_COMPLETE}</h1>
          <p>
            {QuizFormMessages.CORRECT_ANSWERS}
            {correctAnswerCount}
            {QuizFormMessages.TOTAL_QUESTIONS} {questions && questions.length}
          </p>
          {questionIndex != null && correctAnswerCount === 6 ? (
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
            currentQuestionIndex={questionIndex}
            totalQuestionsCount={questions && questions.length}
          />
          <Question
            question={questions && questions[questionIndex]}
            setAnswerStatus={setAnswerStatus}
          />
          {answerStatus != null && (
            <div>
              <PrimaryButton
                mode="slide"
                onClick={onNextClick}
                size="medium"
                label={
                  questions && questionIndex === questions.length - 1
                    ? `${QuizFormMessages.RESULTS_BUTTON}`
                    : `${QuizFormMessages.NEXT_BUTTON}`
                }
              />
            </div>
          )}
        </Fragment>
      )}
    </div>
  );
};
