import React from "react";

export default function Signin() {
  return (
    <div id="signInPage" class="page">
      <div id="formwrapper">
        <h2> Sign in</h2>
        <form>
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
        </form>
      </div>
    </div>
  );
}
