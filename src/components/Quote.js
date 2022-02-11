import React from "react";

export default function Quote(props) {
  return (
    <blockquote>
      <p>
        {" "}
        {props.quote}
        <br />
        <br />
        💜 {props.member}
      </p>
    </blockquote>
  );
}
