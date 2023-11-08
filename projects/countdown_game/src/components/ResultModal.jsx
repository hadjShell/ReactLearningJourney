import { forwardRef } from "react";

const ResultModal = forwardRef(
  ({ timeRemaining, targetTime, handleRest }, ref) => {
    return (
      <dialog ref={ref} className="result-modal" onClose={handleRest}>
        <h2>
          Your score:{" "}
          {timeRemaining < 0
            ? "0.000"
            : ((1 - timeRemaining / (targetTime * 1000)) * 100).toFixed(3)}
        </h2>
        <p>
          The target time was <strong>{targetTime} seconds.</strong>
        </p>
        {timeRemaining < 0 ? (
          <p>You didn't manage to stop the timer.</p>
        ) : (
          <p>
            You stopped the timer with
            <strong>{(timeRemaining / 1000).toFixed(3)} second left.</strong>
          </p>
        )}
        <form method="dialog" onSubmit={handleRest}>
          <button>Close</button>
        </form>
      </dialog>
    );
  }
);

export default ResultModal;
