import quizComplete from "../assets/quiz-complete.png";
import { QUESTIONS } from "../data";

export default function Summary({ userAnswers }) {
  let skip = 0,
    correct = 0,
    wrong = 0;
  const totalQuestions = userAnswers.length;
  userAnswers.forEach((a, i) => {
    if (a === "") skip++;
    else a === QUESTIONS[i].answers[0] ? correct++ : wrong++;
  });

  function calcPercent(n) {
    return (n / totalQuestions).toFixed(4) * 100 + "%";
  }

  return (
    <div id="summary">
      <img src={quizComplete} alt="Quiz complete"></img>
      <h2>Quiz Completed!</h2>
      <div id="summary-stats">
        <p>
          <span className="number">{calcPercent(skip)}</span>
          <span className="text"> Skipped</span>
        </p>
        <p>
          <span className="number">{calcPercent(correct)}</span>
          <span className="text"> Correct</span>
        </p>
        <p>
          <span className="number">{calcPercent(wrong)}</span>
          <span className="text"> Wrong</span>
        </p>
      </div>
    </div>
  );
}
