import { useEffect } from "react";
import ProgressBar from "./ProgressBar.jsx";
import { shufffleArray } from "../helper.js";
import { TIME_ANSWER_EXPIRED } from "../data.js";

export default function Quiz({ question, handleSelectAnswer }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      handleSelectAnswer("");
    }, TIME_ANSWER_EXPIRED * 1000);
    return () => {
      clearTimeout(timer);
    };
  }, [handleSelectAnswer]);

  return (
    <div id="quiz">
      <div id="question">
        <h2>{question.text}</h2>
        <ul id="answers">
          {shufffleArray([...question.answers]).map((a, i) => (
            <li key={i} className="answer">
              <button
                onClick={e => {
                  handleSelectAnswer(e.target.textContent);
                  e.target.blur();
                }}
              >
                {a}
              </button>
            </li>
          ))}
        </ul>
        <ProgressBar key={question.id}></ProgressBar>
        {/*key is for recreate the ProgressBar and reset its state*/}
      </div>
    </div>
  );
}
