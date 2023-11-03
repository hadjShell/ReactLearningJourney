import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import Log from "./components/Log";
import { useState } from "react";
import { useImmer } from "use-immer";

function App() {
  const [turn, setTurn] = useState("X");
  const [log, setLog] = useImmer([]);
  //const [winner, setWinner] = useState(null);

  function handleLog(ri, ci) {
    const player = document
      .querySelector(".active")
      .querySelector(".player-name").textContent;
    setLog(log => {
      log.push({ player: player, row: ri, col: ci });
    });
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player defaultName="Player 1" symbol="X" turn={turn}></Player>
          <Player defaultName="Player 2" symbol="O" turn={turn}></Player>
        </ol>
        <GameBoard
          turn={turn}
          setTurn={setTurn}
          handleLog={handleLog}
        ></GameBoard>
      </div>

      <Log log={log} />
    </main>
  );
}

export default App;
