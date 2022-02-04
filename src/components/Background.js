import React from "react";
import "../components/Background.css";

export default function Background(props) {
  console.log(props);
  return (
    <div class="page">
      <>{props.backgroundPages}</>
    </div>
  );
}
