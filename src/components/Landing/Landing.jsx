import React from "react";
import "./Landing.css";
import logo from "../../assets/type.png";
import Typewriter from "typewriter-effect";

function Landing() {
  return (
    <div className="landing-container">
      <div data-aox="fade-right" className="landing-left">
        <h1 className="landing-header">Can you type ...</h1>
        <div className="type-container">
          <Typewriter
            options={{
              strings: ["Fast??", "Correct!!!", "Quick...."],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
      </div>
      <div className="landing-right">
        <img data-aox="fade-left" src={logo} alt="keyboard" className="image" />
      </div>
    </div>
  );
}

export default Landing;
