import { useState, useEffect } from "react";
import { TIME_ANSWER_EXPIRED } from "../data";

export default function ProgressBar() {
  const [timePassed, setTimePassed] = useState(0);

  useEffect(() => {
    setTimePassed(0);
    const timer = setInterval(() => {
      setTimePassed(tp => tp + 10);
    }, 10);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div>
      <label>Remaining time for answering this question: </label>
      <progress
        id="question-time"
        value={timePassed}
        max={TIME_ANSWER_EXPIRED * 1000}
      ></progress>
    </div>
  );
}
