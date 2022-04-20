import React, { useState, useEffect } from "react";
import "./Game.css";
import "../components/Background.js";
import Background from "../components/Background.js";
import yolo from "../img/yolo.gif";
import RadioButtons from "../components/RadioButtons";
import Quote from "../components/Quote";
import PageTitle from "../components/PageTitle";
import TransparentCard from "../components/TransparentCard";
import axios from "axios";

export default function Game() {
  const [score, setScore] = useState(0);
  const [selectedMember, setSelectedMember] = useState("");
  const [quote, setQuote] = useState("");
  const [displayedMember, setDisplayedMember] = useState("???");
  const [correctMember, setCorrectMember] = useState(" ");
  const [questionsTried, setQuestionsTried] = useState(0);

  useEffect(() => {
    async function fetchRandomQuote() {
      try {
        const result = await axios.get(
          "https://bts-quotes-api.herokuapp.com/quote/random"
        );

        setQuote(result.data.quote);
        setCorrectMember(result.data.member);
        setSelectedMember("");
        setDisplayedMember("???");
      } catch (error) {
        console.error(error);
      }
    }
    if (questionsTried === 0) {
      fetchRandomQuote();
    } else if (selectedMember !== "") {
      setTimeout(fetchRandomQuote, 5000);
    }
  }, [questionsTried, selectedMember]);

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
    <Background background={yolo}>
      <TransparentCard>
        <PageTitle>Who said this? </PageTitle>

        <Quote quote={quote} member={displayedMember} />

        <RadioButtons
          selectedMember={selectedMember}
          setSelectedMember={setSelectedMember}
          score={score}
          setScore={setScore}
          questionsTried={questionsTried}
          setQuestionsTried={setQuestionsTried}
          correctMember={correctMember}
          setDisplayedMember={setDisplayedMember}
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
