import React from "react";
import "./Quote.css";
import "../components/RadioButtons.js";

export default function Quote(props) {
  return (
    <blockquote className="quote-wrapper">
      <p className="quoteText">
        {" "}
        {props.quote}
        <br />
        <br />
        <span>💜 {props.member}</span>
      </p>
    </blockquote>
  );
}
