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

  function onSubmit(data) {
    console.log(data);
  }

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
              required: "Name is required",
              minLength: {
                value: 3,
                message: "Name must contain at least 3 characters",
              },
            })}
          />
          {errors.name && <p>{errors.name.message}</p>}
        </label>
        <br />
        <br />

        <label htmlFor="email-account">
          Email:
          <input
            type="email"
            id="email-account"
            placeholder="Email"
            {...register("email", {
              validate: (value) => value.includes("@"),
              message: "Email must contain '@'",
            })}
          />
          {errors.email && <p>{errors.email.message}</p>}
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
