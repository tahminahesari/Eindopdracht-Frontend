import React from "react";
import "./Home.css";
import "../components/Background.css";

export default function Home() {
  return (
    <div id="homePage" class="page">
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
    </div>
  );
}
