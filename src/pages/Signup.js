import React from "react";
import Formwrapper from "../components/Formwrapper";
import "../components/Background.css";

export default function Signup() {
  return (
    <div id="signUpPage" class="page">
      <Formwrapper formName="Sign up">
        <label for="name">Name:</label>
        <input id="name" type="text" placeholder="Name" />
        <br />
        <br />

        <label for="email">Email:</label>
        <input id="email" type="email" placeholder="Email" />
        <br />
        <br />

        <label for="password">Password:</label>
        <input id="password" type="password" />
        <br />
        <label for="confirmPassword">Confirm Password:</label>
        <input id="confirmPassword" type="password" />

        <br />
        <br />

        <button id="signUp" type="submit">
          Sign Up
        </button>
      </Formwrapper>
    </div>
  );
}
