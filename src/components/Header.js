import React from 'react';

const Header = (props) => {
  return (
    <div style={props.won ? { color: props.chosenColor } : null}>
      <h1>The Great {props.chosenColor} Guessing Game</h1>
      <h2>Now in React!</h2>
    </div>
  );
};

export default Header;
