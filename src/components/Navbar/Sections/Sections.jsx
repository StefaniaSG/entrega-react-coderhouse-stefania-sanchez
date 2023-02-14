import React from "react";
import { Link } from "react-router-dom";
import "./Sections.css";

export const Sections = ({ isNavExpanded }) => {
  return (
    <>
      <div className={`nav-links ${isNavExpanded ? "active" : ""}`}>
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/category/science fiction"}>Science Fiction</Link>
          </li>
          <li>
            <Link to={"/category/fantasy"}>Fantasy</Link>
          </li>
          <li>
            <Link to={"/category/novel"}>Novel</Link>
          </li>
          <li>
            <Link to={"/category/mistery"}>Mistery</Link>
          </li>
        </ul>
      </div>
    </>
  );
};
