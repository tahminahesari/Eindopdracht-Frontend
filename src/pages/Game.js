import React, { useState } from "react";
import "./Game.css";
import "../components/Background.js";
import Background from "../components/Background.js";
import btblack from "../img/btblack.jpg";
import RadioButtons from "../components/RadioButtons";
import Quote from "../components/Quote";
import PageTitle from "../components/PageTitle";

export default function Game() {
  const [score, setScore] = useState(5);
  const [selectedMember, setSelectedMember] = useState("");
  const [quote, setQuote] = useState(
    "`Even if you’re not perfect you’re limited edition`"
  );
  const [correctMember, setCorrectMember] = useState("Jin");
  const [questionsTried, setQuestionsTried] = useState(10);

  let feedback;
  if (selectedMember === correctMember) {
    feedback = "CORRECT!";
  } else if (selectedMember === "") {
    feedback = "Please select a member.";
  } else {
    feedback = "Oops it was actually: " + correctMember;
  }
  let color = "hotpink";

  return (
    <Background background={btblack}>
      <div>
        <p className="score">
          {score} / {questionsTried} points
        </p>
        <p className="feedback" style={{ color: color }}>
          {feedback}
        </p>
        <p className="selectedMember">{selectedMember}</p>

        <Quote quote={quote} member="???" />
        <PageTitle>Who said this? </PageTitle>

        <RadioButtons
          selectedMember={selectedMember}
          setSelectedMember={setSelectedMember}
          score={score}
          setScore={setScore}
          questionsTried={questionsTried}
          setQuestionsTried={setQuestionsTried}
          correctMember={correctMember}
        />
      </div>
    </Background>
  );
}
