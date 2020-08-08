import React from "react";

const Controls = (props) => {
  return (
    <div id="controls">
      <button onClick={props.getColors}>New Colors</button>
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
    </div>
  );
};

export default Controls;
