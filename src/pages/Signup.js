import React, { useState } from "react";
import Formwrapper from "../components/Formwrapper";
import Background from "../components/Background.js";
import { useForm } from "react-hook-form";

export default function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // toegang tot de data die de gebruiker heeft ingevuld
  function onSubmit(data) {
    // Wat is er ingevuld:
    console.log(data);
  }

  // wat komt er uit useFrom?
  console.log("ERRORS", errors);

  return (
    <Background>
      <Formwrapper
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
        formName="Sign up"
      >
        <label htmlFor="details-name">
          Name:
          <input
            type="text"
            id="details-name"
            placeholder="Name"
            {...register("name", {
              required: true,
              minLength: {
                value: 3,
                // pattern: /^[a-zA-Z ]*$/,
              },
            })}
          />
          {errors.name?.type === "required" && <p>Please enter your name</p>}
          {errors.name?.type === "minLength" && (
            <p>Name must contain at least 3 characters</p>
          )}
          {/* {errors.name?.type === "pattern" && (
            <p>
              Please use A-Z, a-z and spaces, don't enter special characters{" "}
            </p>
          )} */}
        </label>
        <br />
        <br />

        <label htmlFor="email-account">
          Email:
          <input
            type="mail"
            id="email-account"
            placeholder="Email"
            {...register("email", {
              validate: (value) => value.includes("@"),
            })}
          />
          {errors.email && <p> Email must contain @</p>}
        </label>
        <br />
        <br />

        <label htmlFor="password">
          Password:
          <input type="password" id="password" {...register("password")} />
          <br />
        </label>

        <label htmlFor="confirmPassword">
          Confirm Password:
          <input
            id="confirmPassword"
            type="password"
            {...register("confirmPassword")}
          />
        </label>

        <br />
        <br />

        <button id="signUp" type="submit">
          Sign Up
        </button>
      </Formwrapper>
    </Background>
  );
}
