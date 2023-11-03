import { useImmer } from "use-immer";

const INITIAL_GAME_BOARD = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard({ turn, setTurn, handleLog }) {
  const [gameBoard, setGameBoard] = useImmer(INITIAL_GAME_BOARD);

  function handleClick(ri, ci, symbol) {
    setGameBoard(gb => {
      gb[ri][ci] = symbol;
    });
    handleLog(ri, ci);
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
                <button onClick={() => handleClick(ri, ci, turn)}>{col}</button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
