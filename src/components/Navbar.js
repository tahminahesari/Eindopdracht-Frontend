import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav id="nav-bar" role="navigation">
      <div id="menuToggle">
        <input type="checkbox" />

        <span></span>
        <span></span>
        <span></span>

        <ul id="menu">
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/signup">
            <li>Sign up</li>
          </Link>
          <Link to="/signIn">
            <li>Sign in</li>
          </Link>
          <a href="quotes.html">
            <li>Quotes</li>
          </a>
          <a href="upload.html">
            <li>Uploads</li>
          </a>
          <a href="game.html">
            <li>Quote Game</li>
          </a>
        </ul>
      </div>
    </nav>
  );
}
