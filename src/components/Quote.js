import React from "react";
import "./Quote.css";
import "../components/RadioButtons.js";

export default function Quote(props) {
  return (
    <blockquote>
      <p className="quoteText">
        {" "}
        {props.quote}
        <br />
        <br />
        💜 {props.member}
      </p>
    </blockquote>
  );
}
