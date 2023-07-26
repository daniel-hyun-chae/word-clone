import React from "react";
import { checkGuess } from "../../game-helpers.js";

function Guess({ guess, answer }) {
  const checkedGuess = guess
    ? checkGuess(guess, answer)
    : [
        { letter: "", status: null },
        { letter: "", status: null },
        { letter: "", status: null },
        { letter: "", status: null },
        { letter: "", status: null },
      ];

  return (
    <p className="guess">
      {checkedGuess.map((char, idx) => (
        <span
          className={char.status ? `cell ${char.status}` : "cell"}
          key={idx}
        >
          {char.letter}
        </span>
      ))}
    </p>
  );
}

export default Guess;
