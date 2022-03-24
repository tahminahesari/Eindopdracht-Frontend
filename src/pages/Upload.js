import React from "react";
import Formwrapper from "../components/Formwrapper";
import "./Upload.css";
import "../components/Background.js";
import Background from "../components/Background.js";
import show from "../img/show.jpg";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Upload() {
  let navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  async function onSubmit(data) {
    console.log(data);
    const response = await axios.post(
      "https://bts-quotes-api.herokuapp.com/POST/quotes",
      {
        data,
        // quote: " ",
        // member: " ",
        // info: " ",
      }
    );
    navigate("../quote", { replace: true });
    console.log(response);
  }

  return (
    <Background background={show}>
      <Formwrapper
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
        formName="Upload"
      >
        <label htmlFor="quote">
          Member quote:
          <textarea
            type="text"
            id="quote"
            rows="3"
            cols="10"
            placeholder="Please type quote here"
            {...register("quote", {
              maxLength: {
                value: 300,
              },
            })}
          ></textarea>
          {errors.quote && (
            <p className="error-message">
              {" "}
              It must contain a maximum of 300 characters
            </p>
          )}
        </label>
        <br />

        <label htmlFor="member">
          Which Member:
          <input
            type="text"
            id="member"
            className={errors.member && "error"}
            placeholder="Which member said"
            {...register("member", {
              required: true,
              minLength: {
                value: 1,
              },
            })}
          />
          {errors.member?.type === "required" && (
            <p className="error-message">Please enter member name here </p>
          )}
          {errors.member?.type === "minLength" && (
            <p className="error-message">
              Member name must contain at least 1 characters
            </p>
          )}
        </label>
        <br />

        <label htmlFor="info">
          Which source
          <input
            id="info"
            type="text"
            placeholder="Type the source here"
            {...register("info", {
              maxLength: {
                value: 27,
              },
            })}
          />
          {errors.info && (
            <p className="error-message">
              {" "}
              It must contain a maximum of 27 characters
            </p>
          )}
        </label>
        <br />

        <input id="send" type="submit" />
      </Formwrapper>
    </Background>
  );
}
