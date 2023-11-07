import { useState, useRef } from "react";

export default function Player() {
  const [playerName, setPlayerName] = useState("Anonymous player");
  const inputRef = useRef(null);

  return (
    <section id="player">
      <h2>Welcome {playerName}</h2>
      <p>
        <input type="text" ref={inputRef} />
        <button
          onClick={e => {
            setPlayerName(inputRef.current.value);
            inputRef.current.value = "";
          }}
        >
          Set Name
        </button>
      </p>
    </section>
  );
}
