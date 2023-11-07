export default function ResultModal({ result, targetTime }) {
  return (
    <dialog className="result-modal">
      <h2>Your score:</h2>
      <p>
        The target time was <strong>{targetTime} seconds.</strong>
      </p>
      <p>
        You stopped the timer with <strong>x second left.</strong>
      </p>
      <form method="dialog">
        <button>Close</button>
      </form>
    </dialog>
  );
}
