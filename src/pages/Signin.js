import Formwrapper from "../components/Formwrapper";
import Background from "../components/Background.js";
import "./Signin.css";
import { useForm } from "react-hook-form";

import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function Signin() {
  const { login } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <Background>
      <Formwrapper
        handleSubmit={handleSubmit}
        onSubmit={login}
        formName="Sign In"
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

        <label htmlFor="password">
          Password:
          <input
            id="password"
            type="password"
            placeholder="Password"
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
        </label>
        <br />
        <br />

        <button id="signIn" type="submit">
          Sign In
        </button>
      </Formwrapper>
    </Background>
  );
}
