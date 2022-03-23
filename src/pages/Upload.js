import React from "react";
import Formwrapper from "../components/Formwrapper";
import "./Upload.css";
import "../components/Background.js";
import Background from "../components/Background.js";
import show from "../img/show.jpg";
import { useForm } from "react-hook-form";
import axios from "axios";

export default function Upload() {
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
        quote: " ",
        member: " ",
        info: " ",
      }
    );

    console.log(response);
  }

  return (
    <Background background={show}>
      <Formwrapper
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
        formName="Upload"
      >
        <label htmlFor="email">
          Email:
          <input
            id="email"
            type="text"
            className={errors.email && "error"}
            placeholder="Your email"
            {...register("email", {
              validate: (value) => value.includes("@"),
            })}
          />
          {errors.email && (
            <p className="error-message"> Email must contain @</p>
          )}
        </label>

        <label htmlFor="subject">
          Subject:
          <input
            id="subject"
            type="text"
            placeholder="Your subject"
            {...register("subject", {
              maxLength: {
                value: 27,
              },
            })}
          />
          {errors.subject && (
            <p className="error-message">
              {" "}
              It must contain a maximum of 27 characters
            </p>
          )}
        </label>
        <br />

        <label htmlFor="message">
          Your quote:
          <textarea
            type="text"
            id="message"
            rows="3"
            cols="10"
            placeholder="Place your quote here"
            {...register("message", {
              maxLength: {
                value: 250,
              },
            })}
          ></textarea>
          {errors.message && (
            <p className="error-message">
              {" "}
              It must contain a maximum of 250 characters
            </p>
          )}
        </label>

        <br />

        <input id="send" type="submit" />
      </Formwrapper>
    </Background>
  );
}
