export default function GameBoard({
  gameBoard,
  setGameBoard,
  turn,
  setTurn,
  updateLog,
}) {
  function handleClick(ri, ci, symbol) {
    setGameBoard(gb => {
      gb[ri][ci] = symbol;
    });
    updateLog(ri, ci);
    const turn = symbol === "X" ? "O" : "X";
    setTurn(turn);
  }

  return (
    <ol id="game-board">
      {gameBoard.map((row, ri) => (
        <li key={ri}>
          <ol>
            {row.map((col, ci) => (
              <li key={ci}>
                <button
                  onClick={() => handleClick(ri, ci, turn)}
                  disabled={col !== null}
                >
                  {col}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
