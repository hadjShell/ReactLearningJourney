import { useState, useCallback } from "react";
import Quiz from "./Quiz.jsx";
import Summary from "./Summary.jsx";
import { TimeContext } from "./WaitTimeContext.jsx";
import { QUESTIONS, TIME_ANSWER_EXPIRED } from "../data.js";

export default function Board() {
  // Hooks and Derivations
  const [userAnswers, setUserAnswers] = useState([]);
  const [waitTime, setWaitTime] = useState(TIME_ANSWER_EXPIRED * 1000);

  const activeQuestionIndex = userAnswers.length;
  const question =
    activeQuestionIndex < QUESTIONS.length
      ? QUESTIONS[activeQuestionIndex]
      : null;

  // Handlers
  const handleSelectAnswer = useCallback(
    function handleSelectAnswer(e, answer) {
      if (answer !== "") {
        // highlight the selected button, disable all buttons and wait for a second
        e.target.className += " selected";
        const answerButtons = e.target.closest("#answers").children;
        for (const a of answerButtons) {
          a.querySelector("button").disabled = true;
        }
        setWaitTime(1000);

        // wait another 2 seconds to show select the right or wrong answer
        setTimeout(() => {
          setWaitTime(2000);
          if (answer === QUESTIONS[activeQuestionIndex].answers[0]) {
            e.target.className += " correct";
          } else {
            e.target.className += " wrong";
          }
          setTimeout(() => {
            setWaitTime(TIME_ANSWER_EXPIRED * 1000);
            e.target.className = "";
            setUserAnswers(ua => [...ua, answer]);
          }, 2 * 1000);
        }, 1 * 1000);
      } else {
        setUserAnswers(ua => [...ua, answer]);
      }
    },
    [activeQuestionIndex]
  );

  // Renderer
  return (
    <>
      {question ? (
        <TimeContext.Provider value={waitTime}>
          <Quiz
            question={question}
            handleSelectAnswer={handleSelectAnswer}
          ></Quiz>
        </TimeContext.Provider>
      ) : (
        <Summary userAnswers={userAnswers}></Summary>
      )}
    </>
  );
}
