import React from "react";
import "../components/RadioButtons.css";

export default function RadioButtons(props) {
  return (
    <div className="radio-buttons">
      <div clasName="radio-content">
        <input id="radio1" type="radio" name="radio" checked />
        <label for="radio1">
          <span></span> Jin
        </label>
      </div>
      <br />
      <div className="radio-content">
        <input id="radio2" type="radio" name="radio" />
        <label for="radio2">
          <span></span> Suga
        </label>
      </div>
      <br />
      <div className="radio-content">
        <input id="radio3" type="radio" name="radio" />
        <label for="radio3">
          <span></span> J-hope
        </label>
      </div>
      <br />
      <div className="radio-content">
        <input id="radio4" type="radio" name="radio" />
        <label for="radio4">
          <span></span> RM
        </label>
      </div>
      <br />
      <div className="radio-content">
        <input id="radio5" type="radio" name="radio" />
        <label for="radio5">
          <span></span> Jimin
        </label>
      </div>

      <div clasName="radio-content">
        <input id="radio6" type="radio" name="radio" checked />
        <label for="radio6">
          <span></span> V
        </label>
      </div>
      <br />

      <div clasName="radio-content">
        <input id="radio7" type="radio" name="radio" checked />
        <label for="radio7">
          <span></span> Jungkook
        </label>
      </div>
      <br />
    </div>
  );
}
