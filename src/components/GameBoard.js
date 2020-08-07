import React from "react";
import ColorSquare from "./ColorSquare.js";

const GameBoard = (props) => {
  let colorSquares = [];
  for (let i = 0; i < 9; i++) {
    colorSquares.push(<ColorSquare color={props.randomColors[i]} />);
  }
  return (
    <div>
      <h3>GameBoard goes here</h3>
      {colorSquares}
    </div>
  );
};

export default GameBoard;
