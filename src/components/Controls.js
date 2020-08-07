import React from "react";

const Controls = (props) => {
  return (
    <div>
      <button>New Colors</button>
      <button
        onClick={() => {
          props.setDifficulty("easy");
        }}
      >
        Easy
      </button>
      <button
        onClick={() => {
          props.setDifficulty("hard");
        }}
      >
        Hard
      </button>
      <span>Current difficulty: {props.difficulty}</span>
    </div>
  );
};

export default Controls;
