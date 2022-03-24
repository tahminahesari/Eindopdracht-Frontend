import Formwrapper from "../components/Formwrapper";
import Background from "../components/Background.js";
import "./Signin.css";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Signin() {
  let navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  async function onSubmit(data) {
    console.log(data);
    const response = await axios.post(
      " https://frontend-educational-backend.herokuapp.com/api/auth/signin",

      {
        username: data.username,
        password: data.password,
      }
    );

    navigate("../upload", { replace: true });
    console.log(response);
  }

  return (
    <Background>
      <Formwrapper
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
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
