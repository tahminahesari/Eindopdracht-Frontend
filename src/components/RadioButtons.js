import React from "react";
import "../components/RadioButtons.css";

export default function RadioButtons(props) {
  function chooseMember(member) {
    props.setSelectedMember(member);
    props.setQuestionsTried(props.questionsTried + 1);
    props.setDisplayedMember(props.correctMember);
    if (props.correctMember === member) {
      props.setScore(props.score + 1);
    }
  }

  const isAMemberSelected = props.selectedMember !== "";
  return (
    <div className="radio-buttons">
      <div className="radio-content">
        <input
          id="radio1"
          type="radio"
          name="radio"
          checked={props.selectedMember === "Jin"}
          onChange={() => {
            chooseMember("Jin");
          }}
          disabled={props.selectedMember !== ""}
        />
        <label htmlFor="radio1">
          <span></span> Jin
        </label>
      </div>
      <br />
      <div className="radio-content">
        <input
          id="radio2"
          type="radio"
          name="radio"
          checked={props.selectedMember === "Suga"}
          onChange={() => chooseMember("Suga")}
          disabled={isAMemberSelected}
        />
        <label htmlFor="radio2">
          <span></span> Suga
        </label>
      </div>
      <br />
      <div className="radio-content">
        <input
          id="radio3"
          type="radio"
          name="radio"
          checked={props.selectedMember === "J-Hope"}
          onChange={() => chooseMember("J-Hope")}
          disabled={isAMemberSelected}
        />
        <label htmlFor="radio3">
          <span></span> J-Hope
        </label>
      </div>
      <br />
      <div className="radio-content">
        <input
          id="radio4"
          type="radio"
          name="radio"
          checked={props.selectedMember === "RM"}
          onChange={() => chooseMember("RM")}
          disabled={isAMemberSelected}
        />
        <label htmlFor="radio4">
          <span></span> RM
        </label>
      </div>
      <br />
      <div className="radio-content">
        <input
          id="radio5"
          type="radio"
          name="radio"
          checked={props.selectedMember === "Jimin"}
          onChange={() => chooseMember("Jimin")}
          disabled={isAMemberSelected}
        />
        <label htmlFor="radio5">
          <span></span> Jimin
        </label>
      </div>
      <br />
      <div className="radio-content">
        <input
          id="radio6"
          type="radio"
          name="radio"
          checked={props.selectedMember === "V"}
          onChange={() => chooseMember("V")}
          disabled={isAMemberSelected}
        />
        <label htmlFor="radio6">
          <span></span> V
        </label>
      </div>
      <br />

      <div className="radio-content">
        <input
          id="radio7"
          type="radio"
          name="radio"
          checked={props.selectedMember === "Jungkook"}
          onChange={() => chooseMember("Jungkook")}
          disabled={isAMemberSelected}
        />
        <label htmlFor="radio7">
          <span></span> Jungkook
        </label>
      </div>
      <br />
    </div>
  );
}
