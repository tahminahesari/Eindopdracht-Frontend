import React from "react";
import "./Game.css";
import "../components/Background.js";
import Background from "../components/Background.js";
import mikrokosmos from "../img/mikrokosmos.png";

export default function Game() {
  return (
    <Background background={mikrokosmos}>
      <div id="gamePage" className="page"></div>;
    </Background>
  );
}
