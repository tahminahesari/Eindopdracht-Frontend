import React from "react";
import "./Formwrapper.css";

export default function Formwrapper(props) {
  return (
    <div id="formwrapper">
      <h2>{props.formName}</h2>
      <form onSubmit={props.handleSubmit(props.onSubmit)}>
        {props.children}
      </form>
    </div>
  );
}
