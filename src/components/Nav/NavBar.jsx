import React from "react";
import "./Nav.css";
import logo from "../../assets/typo.png";

const NavBar = () => {
  return (
    <div className="nav-container">
      <div className="nav-left">
        <img src={logo} alt="app-logo" className="logo" />
        <p className="logo-text">TYPE IT</p>
      </div>
      <div className="nav-right">
        <a
          href="https://github.com/rishonkumar?tab=repositories"
          className="nav-link"
        >
          My Repo
        </a>
      </div>
    </div>
  );
};

export default NavBar;
