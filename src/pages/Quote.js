import React from "react";
import "./Quote.css";
import Background from "../components/Background";
import luna from "../img/luna1.png";

export default function Quote() {
  return (
    <Background background={luna}>
      <div>
        <h1> BTS QUOTES </h1>

        <h2 className="quote-white-outline">
          “The only time you should ever look back, is to see how far you've
          come.”
          <br />― Bangtan Boys, Butterfly
        </h2>
      </div>
    </Background>
  );
}
