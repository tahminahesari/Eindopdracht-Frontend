import React from "react";
import "./Home.css";

export default function Home() {
  return (
    <div id="homePage" class="page">
      <nav id="nav-bar" role="navigation">
        <div id="menuToggle">
          <input type="checkbox" />

          <span></span>
          <span></span>
          <span></span>

          <ul id="menu">
            <a href="index.html">
              <li>Home</li>
            </a>
            <a href="signUp.html">
              <li>Sign up</li>
            </a>
            <a href="signIn.html">
              <li>Sign in</li>
            </a>
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

      <div id="quotes">
        <h2>Get a random quote</h2>

        <p>
          {" "}
          "No one knows tomorrow, but today we are the dream we followed
          yesterday"
          <br />
          <br />
          💜 Suga
        </p>
      </div>
    </div>
  );
}
