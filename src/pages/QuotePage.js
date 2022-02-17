import React from "react";
import "./QuotePage.css";
import Background from "../components/Background";
import blackswan from "../img/blackswan.jpg";
import Quote from "../components/Quote";
import PageTitle from "../components/PageTitle";
import TransparentCard from "../components/TransparentCard";

export default function QuotePage() {
  return (
    <Background background={blackswan}>
      <TransparentCard>
        <PageTitle> BTS Quotes </PageTitle>
        <Quote
          quote="“The only time you should ever look back, is to see how far you've
          come.”"
          member=" Bangtan Boys, Butterfly"
        />
      </TransparentCard>
    </Background>
  );
}
