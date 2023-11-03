import Player from "./components/Player";
import GameBoard from "./components/GameBoard";

function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player defaultName="Player 1" symbol="X"></Player>
          <Player defaultName="Player 2" symbol="O"></Player>
        </ol>
        <GameBoard></GameBoard>
      </div>
      LOG
    </main>
  );
}

export default App;
