import React, { useState, useEffect } from "react";
import "./QuotePage.css";
import Background from "../components/Background";
import blackswan from "../img/blackswan.jpg";
import Quote from "../components/Quote";
import PageTitle from "../components/PageTitle";
import TransparentCard from "../components/TransparentCard";
import axios from "axios";

export default function QuotePage() {
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    async function fetchQuotes() {
      try {
        const result = await axios.get(
          "https://bts-quotes-api.herokuapp.com/quotes"
        );
        // console.log(result);
        setQuotes(result.data.reverse());
      } catch (error) {}
    }
    // console.log("Hi!");
    fetchQuotes();
  }, []);
  // console.log(quotes);

  return (
    <Background background={blackswan}>
      <TransparentCard>
        <PageTitle> BTS Quotes </PageTitle>
        <Quote
          quote="“The only time you should ever look back, is to see how far you've
          come.”"
          member=" Bangtan Boys, Butterfly"
        />
        {quotes.map((quote) => {
          // console.log(quote);
          return (
            <Quote key={quote.id} quote={quote.quote} member={quote.member} />
          );
        })}
      </TransparentCard>
    </Background>
  );
}
