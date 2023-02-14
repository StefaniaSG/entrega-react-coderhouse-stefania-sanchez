import { useState } from "react";
import "./HamburgerMenu.css";

export const HamburgerMenu = ({ isNavExpanded, setIsNavExpanded }) => {
  function handleIsNavExpanded() {
    setIsNavExpanded(!isNavExpanded);
  }

  return (
    <div
      className={`${isNavExpanded ? "active" : ""} hamburger-container`}
      onClick={handleIsNavExpanded}
    >
      <span className="hamburger-menu"></span>
      <span className="hamburger-menu"></span>
      <span className="hamburger-menu"></span>
    </div>
  );
};
