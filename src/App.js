import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header.js";
import Controls from "./components/Controls.js";
import GameBoard from "./components/GameBoard.js";

const App = () => {
  // get random values for RGB
  const randomR = Math.floor(Math.random() * 255);
  const randomG = Math.floor(Math.random() * 255);
  const randomB = Math.floor(Math.random() * 255);
  const [randomColor, setRandomColor] = useState([randomR, randomG, randomB]);
  return (
    <div>
      <Header randomColor={randomColor} />
      <Controls />
      <GameBoard />
    </div>
  );
};

export default App;
