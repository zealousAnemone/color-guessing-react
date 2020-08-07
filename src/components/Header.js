import React, { useState } from "react";

const Header = (props) => {
  return (
    <div>
      <h1>The Great {props.chosenColor} Guessing Game</h1>
      <h2>Now in React!</h2>
    </div>
  );
};

export default Header;
