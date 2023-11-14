import { useState } from "react";
import Quiz from "./Quiz.jsx";
import { QUESTIONS } from "../data.js";
import quizComplete from "../assets/quiz-complete.png";

export default function Board() {
  const [userAnswers, setUserAnswers] = useState([]);

  const activeQuestionIndex = userAnswers.length;
  const question =
    activeQuestionIndex < QUESTIONS.length
      ? QUESTIONS[activeQuestionIndex]
      : null;

  function handleSelectAnswer(answer) {
    setUserAnswers(ua => [...ua, answer]);
  }

  return (
    <>
      {question ? (
        <Quiz
          question={question}
          handleSelectAnswer={handleSelectAnswer}
        ></Quiz>
      ) : (
        <div id="summary">
          <img src={quizComplete} alt="Quiz complete"></img>
          <h2>Quiz Completed!</h2>
        </div>
      )}
    </>
  );
}
