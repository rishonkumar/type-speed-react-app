import React from "react";
import TryAgain from "../TryAgain/TryAgain";
import "./TextContainer.css";

const TextContainer = ({ words, characters, wpm }) => {
  return (
    <div className="test-container">
      <div className="try-again">
        <TryAgain words={words} characters={characters} wpm={wpm} />
      </div>
    </div>
  );
};

export default TextContainer;
