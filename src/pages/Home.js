import React from "react";
import "./Home.css";
import Background from "../components/Background";
import bts from "../img/bts.png";
import Quote from "../components/Quote";

export default function Home() {
  return (
    <Background background={bts}>
      <div id="quotes">
        <h2>Get a random quote</h2>
        <Quote
          quote='"No one knows tomorrow, but today we are the dream we followed
        yesterday"'
          member="Suga"
        />
        <Quote />
        <Quote />
      </div>
    </Background>
  );
}
