import React from "react";
import "./PageTitle.css";

export default function PageTitle(props) {
  return <h1 className="pageTitle">{props.children}</h1>;
}
