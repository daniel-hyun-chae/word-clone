import React from "react";

function GuessInput() {
  const [guess, setGuess] = React.useState("");
  function onSubmit(e) {
    e.preventDefault();
    console.log(guess);
    setGuess("");
  }
  return (
    <form className="guess-input-wrapper" onSubmit={onSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={guess}
        pattern="\w{5,5}"
        onChange={(e) => {
          setGuess(e.target.value.toUpperCase());
        }}
      />
    </form>
  );
}

export default GuessInput;
