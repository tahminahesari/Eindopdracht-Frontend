import React from "react";
import "./Home.css";
import Background from "../components/Background";
import bts from "../img/bts.png";
import Quote from "../components/Quote";

export default function Home() {
  return (
    <Background background={bts}>
      <div id="quotes">
        <h2 id="homePageQuoteTitle">Get a random quote</h2>
        <Quote
          quote='"Do you know what purple means? Purple is last color of the rainbow, it means I will trust you and love you for a long time. Borahae"'
          member="V"
        />
        <Quote
          quote='"No one knows tomorrow, but today we are the dream we followed yesterday"'
          member="Suga"
        />
        <Quote
          quote='"I have come to love myself for who I am, for who I was, and for who I hope to become"'
          member="RM"
        />
      </div>
    </Background>
  );
}
