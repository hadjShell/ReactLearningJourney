import { useState, useEffect, useContext } from "react";
import { TimeContext } from "./WaitTimeContext";

export default function ProgressBar() {
  const [timePassed, setTimePassed] = useState(0);
  const waitTime = useContext(TimeContext);

  useEffect(() => {
    setTimePassed(0);
    const timer = setInterval(() => {
      setTimePassed(tp => tp + 10);
    }, 10);
    return () => {
      clearInterval(timer);
    };
  }, [waitTime]);

  return (
    <div>
      <label>Remaining time for answering this question: </label>
      <progress id="question-time" value={timePassed} max={waitTime}></progress>
    </div>
  );
}
