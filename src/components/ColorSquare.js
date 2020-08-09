import React from "react";
import "../styles.css";

const ColorSquare = (props) => {
  return (
    <div
      className="color-square"
      style={{ backgroundColor: props.color }}
      onClick={() => {
        props.checkWin(props.color);
      }}
    ></div>
  );
};

export default ColorSquare;
