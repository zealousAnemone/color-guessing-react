import React from "react";
import "../styles.css";

const ColorSquare = (props) => {
  return (
    <div class="color-square" style={{ backgroundColor: props.color }}></div>
  );
};

export default ColorSquare;
