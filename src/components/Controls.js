import React from "react";

const Controls = (props) => {
  return (
    <div id="controls">
      <button onClick={props.getColors}>New Colors</button>
      <span className={props.won ? "won" : null}>YOU WON!</span>
      <button
        className={props.num === 3 ? "active" : null}
        onClick={() => {
          props.setDifficulty("easy");
        }}
      >
        Easy
      </button>
      <button
        className={props.num === 6 ? "active" : null}
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
