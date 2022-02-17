import React from "react";
import Formwrapper from "../components/Formwrapper";
import "./Upload.css";
import "../components/Background.js";
import Background from "../components/Background.js";
import show from "../img/show.jpg";

export default function Upload() {
  return (
    <Background background={show}>
      <Formwrapper formName="Upload">
        <label for="email">Email:</label>
        <input id="email" type="email" placeholder="Your email" />

        <label for="subject">Subject:</label>
        <input id="subject" type="text" placeholder="Your subject" />
        <br />

        <label for="message">Your message:</label>
        <textarea
          id="message"
          rows="3"
          cols="10"
          placeholder="Type your message here"
        ></textarea>
        <br />

        <label for="file">Upload your file</label>
        <input id="file" type="file" />
        <br />
        <br />

        <input id="send" type="submit" />
      </Formwrapper>
    </Background>
  );
}
