import { useState, useRef } from "react";
import ResultModal from "./ResultModal";

export default function TimerChallenge({ title, targetTime }) {
  const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);
  const isStarted = timeRemaining > 0 && timeRemaining < targetTime * 1000;
  const timerRef = useRef(null);
  const dialogRef = useRef(null);

  if (timeRemaining < 0) {
    dialogRef.current.showModal();
    clearInterval(timerRef.current);
  }

  function handleStart() {
    timerRef.current = setInterval(() => {
      setTimeRemaining(tr => tr - 10);
    }, 10);
  }

  function handleStop() {
    clearInterval(timerRef.current);
    dialogRef.current.showModal();
  }

  function handleRest() {
    setTimeRemaining(targetTime * 1000);
  }

  return (
    <>
      <ResultModal
        ref={dialogRef}
        timeRemaining={timeRemaining}
        targetTime={targetTime}
        handleRest={handleRest}
      />
      <section className="challenge">
        <h2>{title}</h2>
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
