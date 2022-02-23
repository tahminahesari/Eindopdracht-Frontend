import React, { useState } from "react";
import "./Game.css";
import "../components/Background.js";
import Background from "../components/Background.js";
import btblue from "../img/btblue.jpg";
import RadioButtons from "../components/RadioButtons";
import Quote from "../components/Quote";
import PageTitle from "../components/PageTitle";
import TransparentCard from "../components/TransparentCard";

export default function Game() {
  const [score, setScore] = useState(5);
  const [selectedMember, setSelectedMember] = useState("");
  const [quote, setQuote] = useState(
    "`Even if you’re not perfect you’re limited edition`"
  );
  const [correctMember, setCorrectMember] = useState("RM");
  const [questionsTried, setQuestionsTried] = useState(42);

  let feedback;
  if (selectedMember === correctMember) {
    feedback = "CORRECT!";
  } else if (selectedMember === "") {
    feedback = "Please select a member.";
  } else {
    feedback = "Oops it was actually: " + correctMember;
  }
  let color;
  if (selectedMember === correctMember) {
    color = "green";
  } else if (selectedMember === "") {
    color = "white";
  } else {
    color = "hotpink";
  }

  return (
    <Background background={btblue}>
      <TransparentCard>
        <PageTitle>Who said this? </PageTitle>

        <Quote quote={quote} member="???" />

        <RadioButtons
          selectedMember={selectedMember}
          setSelectedMember={setSelectedMember}
          score={score}
          setScore={setScore}
          questionsTried={questionsTried}
          setQuestionsTried={setQuestionsTried}
          correctMember={correctMember}
        />

        <p className="score">
          {score} / {questionsTried} points
        </p>
        <p className="feedback" style={{ color: color }}>
          {feedback}
        </p>
        <p className="selectedMember">{selectedMember}</p>
      </TransparentCard>
    </Background>
  );
}
