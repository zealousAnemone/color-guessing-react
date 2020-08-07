import React, { useState } from "react";

const Header = (props) => {
  return (
    <div>
      <h1>The Great RGB Guessing Game</h1>
      <h2>Now in React!</h2>
      {/* <h3>Random color is {props.randomColor[0]}</h3> */}
    </div>
  );
};

export default Header;
