import React from "react";

function Banner({ numGuesses, isWinner, answer }) {
  return (
    <div className={isWinner ? "happy banner" : "sad banner"}>
      {isWinner && (
        <p>
          <strong>Congratulations!&nbsp;</strong>
          Got it in&nbsp;
          <strong>{numGuesses} guesses</strong>
        </p>
      )}
      {!isWinner && (
        <p>
          Sorry, the correct answer is&nbsp;
          <strong>{answer}</strong>
        </p>
      )}
    </div>
  );
}

export default Banner;
