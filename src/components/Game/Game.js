import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput/GuessInput";
import Banner from "../Banner/Banner";
import GuessResults from "../GuessResults/GuessResults";
import { v4 as uuidv4 } from "uuid";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [previousGuesses, setPreviousGuesses] = React.useState([]);
  const numGuesses = previousGuesses.length;
  const isWinner = previousGuesses.find((guess) => guess.guess === answer)
    ? true
    : false;

  function addNewGuess(guess) {
    const newPreviousGuesses = [...previousGuesses, { guess, id: uuidv4() }];
    setPreviousGuesses(newPreviousGuesses);
  }

  return (
    <>
      <GuessResults previousGuesses={previousGuesses} answer={answer} />
      <GuessInput
        addNewGuess={addNewGuess}
        disabled={numGuesses >= 6 || isWinner}
      />
      {(isWinner || numGuesses >= 6) && (
        <Banner numGuesses={numGuesses} isWinner={isWinner} answer={answer} />
      )}
    </>
  );
}

export default Game;
