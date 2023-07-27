import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput/GuessInput";
import GuessResults from "../GuessResults/GuessResults";
import { v4 as uuidv4 } from "uuid";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import WonBanner from "../WonBanner/WonBanner";
import LostBanner from "../LostBanner/LostBanner";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [previousGuesses, setPreviousGuesses] = React.useState([]);
  const [gameStatus, setGameStatus] = React.useState("running");

  function handleSubmitGuess(guess) {
    const newPreviousGuesses = [...previousGuesses, { guess, id: uuidv4() }];
    setPreviousGuesses(newPreviousGuesses);

    if (guess === answer) {
      setGameStatus("won");
    } else if (newPreviousGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameStatus("lost");
    }
  }

  return (
    <>
      <GuessResults previousGuesses={previousGuesses} answer={answer} />
      <GuessInput
        handleSubmitGuess={handleSubmitGuess}
        disabled={gameStatus !== "running"}
      />
      {gameStatus === "won" && (
        <WonBanner numGuesses={previousGuesses.length} />
      )}
      {gameStatus === "lost" && <LostBanner answer={answer} />}
    </>
  );
}

export default Game;
