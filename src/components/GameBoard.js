import React from "react";
import ColorSquare from "./ColorSquare.js";

const GameBoard = (props) => {
  let colorSquares = [];
  for (let i = 0; i < props.num; i++) {
    colorSquares.push(
      <ColorSquare
        chosenColor={props.chosenColor}
        key={i}
        color={props.randomColors[i]}
        checkWin={props.checkWin}
      />
    );
  }
  return <div id="game-board">{colorSquares}</div>;
};

export default GameBoard;
