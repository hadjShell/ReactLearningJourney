import { useRef } from "react";
import { shuffleArray } from "../helper.js";

export default function Answers({ question, handleSelectAnswer }) {
  const shuffledAnswers = useRef(shuffleArray([...question.answers]));

  return (
    <ul id="answers">
      {shuffledAnswers.current.map((a, i) => (
        <li key={i} className="answer">
          <button
            onClick={e => {
              handleSelectAnswer(e, e.target.textContent);
              e.target.blur();
            }}
          >
            {a}
          </button>
        </li>
      ))}
    </ul>
  );
}
