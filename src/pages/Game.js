import React from "react";
import "./Game.css";
import "../components/Background.js";
import Background from "../components/Background.js";
import btblack from "../img/btblack.jpg";
import RadioButtons from "../components/RadioButtons";
import Quote from "../components/Quote";
import PageTitle from "../components/PageTitle";

export default function Game() {
  return (
    <Background background={btblack}>
      <div>
        <Quote quote="Some random quote" member="???" />
        <PageTitle>Who said this? </PageTitle>

        <RadioButtons />
      </div>
    </Background>
  );
}
