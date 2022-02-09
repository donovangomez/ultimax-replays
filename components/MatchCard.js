import React from "react";

export default function matchCard({
  key,
  playerOneCharacter,
  playerTwoCharacter,
  playerOne,
  playerTwo,
  version,
  link,
}) {
  return (
    <div key={key}>
      <h2>{playerOne}</h2>
      <h2>{playerOneCharacter}</h2>
      <span>Vs.</span>
      <h2>{playerTwo}</h2>
      <h2>{playerTwoCharacter}</h2>
      <p>{version}</p>
      <a href={link} target="_blank">
        Watch
      </a>
    </div>
  );
}
