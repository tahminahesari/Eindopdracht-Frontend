import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";

export default function Navbar() {
  const auth = useContext(AuthContext);
  const isSignedIn = auth.user.accessToken !== null;
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav id="nav-bar" role="navigation">
      <div id="menuToggle">
        <input
          type="checkbox"
          checked={menuOpen}
          onChange={() => setMenuOpen(!menuOpen)}
        />

        <span></span>
        <span></span>
        <span></span>

        <ul id="menu">
          <Link to="/" onClick={closeMenu}>
            <li>Home</li>
          </Link>
          {!isSignedIn && (
            <Link to="/signup" onClick={closeMenu}>
              <li>Sign Up</li>
            </Link>
          )}
          {!isSignedIn && (
            <Link to="/signIn" onClick={closeMenu}>
              <li>Sign In</li>
            </Link>
          )}
          <Link to="/upload" onClick={closeMenu}>
            <li>Upload {!isSignedIn && "(please sign in first)"}</li>
          </Link>
          <Link to="/quote" onClick={closeMenu}>
            <li>Quotes</li>
          </Link>
          <Link to="/game" onClick={closeMenu}>
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
