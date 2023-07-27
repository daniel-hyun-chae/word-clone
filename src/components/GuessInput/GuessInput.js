import React from "react";

function GuessInput({ handleSubmitGuess, disabled }) {
  const [guess, setGuess] = React.useState("");
  function handleSubmit(e) {
    e.preventDefault();
    handleSubmitGuess(guess);
    setGuess("");
  }
  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={guess}
        disabled={disabled}
        required
        pattern="[a-zA-Z]{5}"
        title="5 letter word"
        onChange={(e) => {
          setGuess(e.target.value.toUpperCase());
        }}
      />
    </form>
  );
}

export default GuessInput;
