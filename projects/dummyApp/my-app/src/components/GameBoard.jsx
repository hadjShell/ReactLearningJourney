import { useState } from "react";

const INITIAL_GAME_BOARD = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard() {
  return (
    <ol id="game-board">
      {INITIAL_GAME_BOARD.map((row, i) => (
        <li key={i}>
          <ol>
            {row.map((col, i) => (
              <li key={i}>
                <button>{col}</button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
