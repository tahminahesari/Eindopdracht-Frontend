import Formwrapper from "../components/Formwrapper";
import Background from "../components/Background.js";
import "./Signin.css";
import { useForm } from "react-hook-form";

export default function Signin() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  console.log(handleSubmit);

  function onSubmit(data) {
    console.log(data);
  }

  return (
    <Background>
      <Formwrapper
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
        formName="Sign in"
      >
        <label htmlFor="email">
          Email:
          <input
            id="email"
            type="text"
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
