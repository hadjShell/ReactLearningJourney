export default function GameOver({ winner, handleReset }) {
  return (
    <div id="game-over">
      <h2>Game Over!</h2>
      <p>{winner} won!</p>
      <p>
        <button onClick={handleReset}>Rematch!</button>
      </p>
    </div>
  );
}
