import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";

export default function Navbar() {
  const auth = useContext(AuthContext);
  console.log(auth);
  const isSignedIn = auth.user.accessToken !== null;

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
          {!isSignedIn && (
            <Link to="/signup">
              <li>Sign Up</li>
            </Link>
          )}
          {!isSignedIn && (
            <Link to="/signIn">
              <li>Sign In</li>
            </Link>
          )}
          <Link to="/upload">
            <li>Upload {!isSignedIn && "(Please sign in first)"}</li>
          </Link>
          <Link to="/quote">
            <li>Quotes</li>
          </Link>
          <Link to="/game">
            <li>Quote Game</li>
          </Link>
          {isSignedIn && (
            <li>
              <button onClick={auth.logout}>Sign Out</button>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
}
