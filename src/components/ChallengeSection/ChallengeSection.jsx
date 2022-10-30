import React from "react";
import TextContainer from "../TextContainer/TextContainer";
import "./ChallengeSection.css";

const ChallengeSection = () => {
  return (
    <div className="challenge-section-container">
      <h1 className="challenge-section-header">Take a Speed text now</h1>
      <TextContainer words={4} characters={14} wpm={20} />
    </div>
  );
};

export default ChallengeSection;
