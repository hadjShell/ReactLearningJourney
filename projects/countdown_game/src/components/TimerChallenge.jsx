import { useState, useRef } from "react";
import ResultModal from "./ResultModal";

export default function TimerChallenge({ title, targetTime }) {
  const [isExpired, setIsExpired] = useState(false);
  const [isStarted, setIsStarted] = useState(false);
  const timerRef = useRef(null);
  //const startTime = useRef(0);

  function handleStart() {
    setIsStarted(true);
    timerRef.current = setTimeout(() => {
      setIsExpired(true);
      setIsStarted(false);
    }, targetTime * 1000);
  }

  function handleStop() {
    clearTimeout(timerRef.current);
    setIsStarted(false);
  }

  return (
    <>
      {(isExpired || !isStarted) && (
        <ResultModal result={null} targetTime={targetTime} />
      )}
      <section className="challenge">
        <h2>{title}</h2>
        {isExpired && <p>You lost!</p>}
        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={!isStarted ? handleStart : handleStop}>
            {!isStarted ? "Start" : "Stop"}
          </button>
        </p>
        <p className={isStarted ? "active" : undefined}>
          {isStarted ? "Timer is running..." : "Timer shut down."}
        </p>
      </section>
    </>
  );
}
