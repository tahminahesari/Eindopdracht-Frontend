import React from "react";
import Formwrapper from "../components/Formwrapper";
import "./Upload.css";
import "../components/Background.js";
import Background from "../components/Background.js";
import show from "../img/show.jpg";
import { useForm } from "react-hook-form";

export default function Upload() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  console.log(handleSubmit);

  function onSubmit(data) {
    console.log(data);
  }

  console.log("ERRORS", errors);

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
          Your message:
          <textarea
            type="text"
            id="message"
            rows="3"
            cols="10"
            placeholder="Type your message here"
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

        <label htmlFor="file">Upload your file</label>
        <input id="file" type="file" />

        <br />
        <br />

        <input id="send" type="submit" />
      </Formwrapper>
    </Background>
  );
}
