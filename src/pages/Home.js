import React from "react";
import "./Home.css";
import Background from "../components/Background";
import bts from "../img/bts.png";

export default function Home() {
  return (
    <Background background={bts}>
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
    </Background>
  );
}
