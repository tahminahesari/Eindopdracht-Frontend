import React, { useState } from "react";
import Formwrapper from "../components/Formwrapper";
import Background from "../components/Background.js";
import { useForm } from "react-hook-form";
import "./Signup.css";
import stage from "../img/stage.jpg";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  let navigate = useNavigate();
  const [apiError, setApiError] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();
  const firstPassword = watch("password");

  async function onSubmit(data) {
    try {
      await axios.post(
        "https://frontend-educational-backend.herokuapp.com/api/auth/signup",
        {
          username: data.username,
          email: data.email,
          password: data.password,
          role: ["user"],
        }
      );

      navigate("../signin", { replace: true });
    } catch (error) {
      setApiError(error.response.data);
    }
  }
  return (
    <Background background={stage}>
      <Formwrapper
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
        formName="Sign Up"
      >
        <label htmlFor="username">
          Username:
          <input
            type="text"
            id="username"
            className={errors.username && "error"}
            placeholder="Username"
            {...register("username", {
              required: true,
              minLength: {
                value: 2,
              },
            })}
          />
          {errors.username?.type === "required" && (
            <p className="error-message">Please enter your username</p>
          )}
          {errors.username?.type === "minLength" && (
            <p className="error-message">
              Username must contain at least 2 characters
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
            className={errors.confirmPassword && "error"}
            {...register("confirmPassword", {
              validate: (value) => {
                return value === firstPassword;
              },
            })}
          />
          {errors.confirmPassword && (
            <p className="error-message"> Passwords do not match.</p>
          )}
        </label>

        <br />
        <br />
        <p className="error-message">{apiError}</p>
        <button id="signUp" type="submit">
          Sign Up
        </button>
      </Formwrapper>
    </Background>
  );
}
