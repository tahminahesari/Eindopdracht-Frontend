import React, { useState, useEffect } from "react";
import "./Home.css";
import Background from "../components/Background";
import seven from "../img/seven.gif";
import Quote from "../components/Quote";
import PageTitle from "../components/PageTitle";
import TransparentCard from "../components/TransparentCard";
import axios from "axios";

export default function Home() {
  const [randomQuote, setRandomQuote] = useState({});

  useEffect(() => {
    async function fetchRandomQuote() {
      try {
        const result = await axios.get(
          "https://bts-quotes-api.herokuapp.com/quote/random"
        );

        setRandomQuote(result.data);
      } catch (error) {}
    }
    fetchRandomQuote();
  }, []);

  return (
    <Background background={seven}>
      <TransparentCard>
        <PageTitle>Get a random quote </PageTitle>

        <Quote quote={randomQuote.quote} member={randomQuote.member} />
      </TransparentCard>
    </Background>
  );
}
