import React from "react";
import "./Formwrapper.css";

export default function Formwrapper(props) {
  console.log(props);
  return (
    <div id="formwrapper">
      <h2>{props.formName}</h2>
      <form>{props.children}</form>
    </div>
  );
}
