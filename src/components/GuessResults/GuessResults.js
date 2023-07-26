import React from "react";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants.js";
import { range } from "../../utils";
import Guess from "../Guess/Guess.js";

function GuessResults({ previousGuesses }) {
  const remainingGuesses = NUM_OF_GUESSES_ALLOWED - previousGuesses.length;

  return (
    <div className="guess-results">
      {previousGuesses.map((previousGuess) => (
        <Guess key={previousGuess.id} guess={previousGuess.guess} />
      ))}
      {remainingGuesses > 0 &&
        range(remainingGuesses).map((index) => <Guess key={index} />)}
    </div>
  );
}

export default GuessResults;
