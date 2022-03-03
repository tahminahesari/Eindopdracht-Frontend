import React, { useState, useEffect } from "react";
import "./Home.css";
import Background from "../components/Background";
import bts from "../img/bts.png";
import Quote from "../components/Quote";
import PageTitle from "../components/PageTitle";
import TransparentCard from "../components/TransparentCard";
import axios from "axios";

export default function Home() {
  const [randomQuotes, setRandomQuotes] = useState({});
  console.log("Anneyong!");

  useEffect(() => {
    async function fetchRandomQuotes() {
      try {
        const result = await axios.get(
          "https://bts-quotes-api.herokuapp.com/quote/random"
        );
        console.log(result);
        setRandomQuotes(result.data);
      } catch (error) {}
    }
    fetchRandomQuotes();
  }, []);
  console.log(randomQuotes);

  return (
    <Background background={bts}>
      <TransparentCard>
        <PageTitle>Get a random quote </PageTitle>
        <Quote
          quote='"Do you know what purple means? Purple is last color of the rainbow, it means I will trust you and love you for a long time. Borahae"'
          member="V"
        />
        <Quote
          quote='"No one knows tomorrow, but today we are the dream we followed yesterday"'
          member="Suga"
        />
        <Quote
          quote='"I have come to love myself for who I am, for who I was, and for who I hope to become"'
          member="RM"
        />
        {randomQuotes.map((quote) => {
          console.log(quote);
          return (
            <Quote key={quote.id} quote={quote.quote} member={quote.member} />
          );
        })}
      </TransparentCard>
    </Background>
  );
}
