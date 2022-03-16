import React, { useState } from "react";
import Formwrapper from "../components/Formwrapper";
import Background from "../components/Background.js";
import { useForm } from "react-hook-form";
import "./Signup.css";
import { getValue } from "@testing-library/user-event/dist/utils";

export default function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  console.log(handleSubmit);

  //Submit handler
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
        <label htmlFor="name">
          Name:
          <input
            type="text"
            id="name"
            className={errors.name && "error"}
            placeholder="Name"
            {...register("name", {
              required: true,
              minLength: {
                value: 2,
              },
            })}
          />
          {errors.name?.type === "required" && (
            <p className="error-message">Please enter your name</p>
          )}
          {errors.name?.type === "minLength" && (
            <p className="error-message">
              Name must contain at least 2 characters
            </p>
          )}
        </label>
        <br />
        <br />

        <label htmlFor="email">
          Email:
          <input
            type="text"
            id="email"
            className={errors.email && "error"}
            placeholder="Email"
            {...register("email", {
              validate: (value) => value.includes("@"),
            })}
          />
          {errors.email && (
            <p className="error-message"> Email must contain @</p>
          )}
        </label>
        <br />
        <br />

        <label htmlFor="password">
          Password:
          <input
            type="password"
            id="password"
            name="password"
            className={errors.password && "error"}
            {...register("password", {
              minLength: 5,
              pattern: /(?=.*?[0-9])/,
            })}
          />
          {errors.password && (
            <p className="error-message"> At least one digit,</p>
          )}
          {errors.password?.type === "minLength" && (
            <p className="error-message">
              Name must contain at least 5 characters
            </p>
          )}
          <br />
        </label>

        <label htmlFor="confirmPassword">
          Confirm Password:
          <input
            id="confirmPassword"
            type="password"
            {...register("confirmPassword", {
              validate: {
                emailEqual: (value) =>
                  value === password.current || "Passwords do not match!",
              },
            })}
          />
          {errors.name?.type === "emailEqual" && (
            <p className="error-message">Please enter your name</p>
          )}
          {errors.password && (
            <p className="error-message"> Passwords do not match.</p>
          )}
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
