import { useState } from "react";

export default function Player({ defaultName, symbol, turn }) {
  const [isEdited, setIsEdited] = useState(false);
  const [name, setName] = useState(defaultName);

  return (
    <li className={symbol === turn && "active"}>
      <span className="player">
        {!isEdited ? (
          <span className="player-name">{name}</span>
        ) : (
          <input
            type="text"
            required
            value={name}
            onChange={e => setName(e.target.value)}
          ></input>
        )}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={() => setIsEdited(i => !i)}>
        {!isEdited ? "Edit" : "Save"}
      </button>
    </li>
  );
}
