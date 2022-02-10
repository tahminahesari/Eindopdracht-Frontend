import React from "react";
import Formwrapper from "../components/Formwrapper";
import "../components/Background";

export default function Signin() {
  return (
    <div id="signInPage" class="page">
      <Formwrapper formName="Sign in">
        <label for="email">Email:</label>
        <input id="email" type="email" placeholder="Email" />
        <br />

        <label for="password">Password:</label>
        <input id="password" type="password" placeholder="Password" />
        <br />
        <br />

        <button id="signIn" type="button">
          Sign In
        </button>
      </Formwrapper>
    </div>
  );
}
