import React from "react";

function GuessResults({ previousGuesses }) {
  return (
    <div className="guess-results">
      {previousGuesses.map((previousGuess) => (
        <p className="guess" key={previousGuess.id}>
          {previousGuess.guess}
        </p>
      ))}
    </div>
  );
}

export default GuessResults;
