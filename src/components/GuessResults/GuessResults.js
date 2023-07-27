import React from "react";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants.js";
import { range } from "../../utils";
import Guess from "../Guess/Guess.js";

function GuessResults({ previousGuesses, answer }) {
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((num) => (
        <Guess key={num} guess={previousGuesses[num]} answer={answer} />
      ))}
    </div>
  );
}

export default GuessResults;
