import React from "react";
import Formwrapper from "../components/Formwrapper";
import "./Upload.css";
import "../components/Background.js";
import Background from "../components/Background.js";
import show from "../img/show.jpg";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Upload.css";

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
      "https://bts-quotes-api.herokuapp.com/quotes",
      {
        quote: data.quote,
        member: data.member,
        info: data.info,
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
            className={errors.quote && "error"}
            rows="3"
            cols="10"
            placeholder="Please type quote here"
            {...register("quote", {
              required: true,
              maxLength: {
                value: 350,
              },
            })}
          ></textarea>
          {errors.quote && (
            <p className="error-message">
              {" "}
              Please fill in a quote but no longer than 350 characters
            </p>
          )}
        </label>
        <br />
        <label htmlFor="member">
          Which Member:
          <select
            className={errors.member && "error"}
            {...register("member", { required: true })}
          >
            <option value="">--Please choose a member--</option>
            <option value="Jin">Jin</option>
            <option value="Suga">Suga</option>
            <option value="J-Hope">J-Hope</option>
            <option value="RM">RM</option>
            <option value="Jimin">Jimin</option>
            <option value="V">V</option>
            <option value="Jungkook">Jungkook</option>
          </select>
          {errors.member?.type === "required" && (
            <p className="error-message">Please choose a member</p>
          )}
        </label>
        <br />

        <label htmlFor="info">
          Which source:
          <input
            id="info"
            className={errors.info && "error"}
            type="text"
            placeholder="Type the source here"
            {...register("info", {
              required: true,
              maxLength: {
                value: 27,
              },
            })}
          />
          {errors.info && (
            <p className="error-message">
              {" "}
              Please fill in your source info but no longer than 27 characters
            </p>
          )}
        </label>
        <br />
        <button id="send" type="submit">
          Upload
        </button>
      </Formwrapper>
    </Background>
  );
}
