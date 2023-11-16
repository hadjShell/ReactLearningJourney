import { useContext, useEffect } from "react";
import ProgressBar from "./ProgressBar.jsx";
import Answers from "./Answers.jsx";
import { TIME_ANSWER_EXPIRED } from "../data.js";
import { TimeContext } from "./WaitTimeContext.jsx";

export default function Quiz({ question, handleSelectAnswer }) {
  const waitTime = useContext(TimeContext);

  useEffect(() => {
    const timer = setTimeout(() => {
      handleSelectAnswer(null, "");
    }, TIME_ANSWER_EXPIRED * 1000);
    return () => {
      clearTimeout(timer);
    };
  }, [handleSelectAnswer, waitTime]);

  return (
    <div id="quiz">
      <div id="question">
        <h2>{question.text}</h2>
        <Answers
          key={question.id + "a"}
          question={question}
          handleSelectAnswer={handleSelectAnswer}
        ></Answers>
        <ProgressBar key={question.id}></ProgressBar>
        {/*key is used for recreate the ProgressBar and reset its state*/}
      </div>
    </div>
  );
}
