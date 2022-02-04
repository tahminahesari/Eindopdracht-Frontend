import React from "react";
import Formwrapper from "../components/Formwrapper";
import "./Upload.css";

export default function Upload() {
  return (
    <div id="uploadPage" class="page">
      {/* krijg "Upload" titel op de pagina niet voor elkaar! */}
      <Formwrapper forName="Upload">
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
    </div>
  );
}
