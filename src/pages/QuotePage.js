import React from "react";
import "./QuotePage.css";
import Background from "../components/Background";
import luna from "../img/luna1.png";
import Quote from "../components/Quote";

export default function QuotePage() {
  return (
    <Background background={luna}>
      <div>
        <h1> BTS QUOTES </h1>
        <Quote
          quote="“The only time you should ever look back, is to see how far you've
          come.”"
          member="V"
        />
        <h2 className="quote-white-outline">
          <br />― Bangtan Boys, Butterfly
        </h2>
      </div>
    </Background>
  );
}
