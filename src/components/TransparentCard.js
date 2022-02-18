import React from "react";
import "./TransparentCard.css";

export default function TransparentCard(props) {
  return <div className="transparentCard">{props.children} </div>;
}
