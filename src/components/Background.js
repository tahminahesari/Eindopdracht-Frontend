import React from "react";
import "../components/Background.css";

export default function Background(props) {
  return (
    <div
      className="page"
      style={{ backgroundImage: `url(${props.background})` }}
    >
      <>{props.children}</>
    </div>
  );
}
