import React from "react";
import Banner from "../Banner/Banner";

function WonBanner({ numGuesses }) {
  return (
    <Banner status="happy">
      <p>
        <strong>Congratulations!&nbsp;</strong>
        Got it in&nbsp;
        <strong>{numGuesses} guesses</strong>
      </p>
    </Banner>
  );
}

export default WonBanner;
