import React from "react";
import "./Game.css";
import "../components/Background.js";
import Background from "../components/Background.js";
import btblack from "../img/btblack.jpg";

export default function Game() {
  return (
    <Background background={btblack}>
      <div id="gamePage" className="page"></div>;
    </Background>
  );
}
