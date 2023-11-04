import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import Log from "./components/Log";
import GameOver from "./components/GameOver";
import { useState } from "react";
import { useImmer } from "use-immer";
import { INITIAL_GAME_BOARD, WINNING_COMBINATIONS } from "./data";

function checkWinner(gameBoard) {
  let winner = null;
  WINNING_COMBINATIONS.forEach(wc => {
    if (
      gameBoard[wc[0].row][wc[0].column] &&
      gameBoard[wc[0].row][wc[0].column] ===
        gameBoard[wc[1].row][wc[1].column] &&
      gameBoard[wc[1].row][wc[1].column] === gameBoard[wc[2].row][wc[2].column]
    ) {
      const symbol = gameBoard[wc[0].row][wc[0].column];
      winner = symbol === "X" ? "Player 1" : "Player 2";
      return winner;
    }
  });
  return winner;
}

function App() {
  const [turn, setTurn] = useState("X");
  const [log, setLog] = useImmer([]);
  const [gameBoard, setGameBoard] = useImmer(INITIAL_GAME_BOARD);

  // ensure always computing the result AFTER renderer update
  const winner = checkWinner(gameBoard);

  function updateLog(ri, ci) {
    const player = turn === "X" ? "Player 1" : "Player 2";
    setLog(log => {
      log.push({ player: player, row: ri, col: ci });
    });
  }

  function handleReset() {
    setTurn("X");
    setLog([]);
    setGameBoard(INITIAL_GAME_BOARD);
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player defaultName="Player 1" symbol="X" turn={turn}></Player>
          <Player defaultName="Player 2" symbol="O" turn={turn}></Player>
        </ol>
        {winner && (
          <GameOver winner={winner} handleReset={handleReset}></GameOver>
        )}
        {log.length === 9 && !winner && (
          <GameOver winner="No one" handleReset={handleReset}></GameOver>
        )}
        <GameBoard
          gameBoard={gameBoard}
          setGameBoard={setGameBoard}
          turn={turn}
          setTurn={setTurn}
          updateLog={updateLog}
          checkWinner={checkWinner}
        ></GameBoard>
      </div>

      <Log log={log} />
    </main>
  );
}

export default App;
