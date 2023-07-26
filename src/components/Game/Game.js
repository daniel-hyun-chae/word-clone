import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput/GuessInput";
import GuessResults from "../GuessResults/GuessResults";
import { v4 as uuidv4 } from "uuid";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [previousGuesses, setPreviousGuesses] = React.useState([]);

  function addNewGuess(guess) {
    const newPreviousGuesses = [...previousGuesses, { guess, id: uuidv4() }];
    setPreviousGuesses(newPreviousGuesses);
  }

  return (
    <>
      <GuessResults previousGuesses={previousGuesses} />
      <GuessInput addNewGuess={addNewGuess} />
    </>
  );
}

export default Game;
