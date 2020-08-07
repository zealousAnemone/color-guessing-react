import React, { useState } from "react";
//import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header.js";
import Controls from "./components/Controls.js";
import GameBoard from "./components/GameBoard.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      randomColors: [],
      chosenColor: null,
      difficulty: "easy",
    };

    this.getRandomColor = this.getRandomColor.bind(this);
  }

  getRandomColor() {
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);
    return `rgb(${red}, ${green}, ${blue})`;
  }

  componentDidMount() {
    const randomColors = [];
    for (let i = 0; i < 9; i++) {
      randomColors.push(this.getRandomColor());
    }
    this.setState({
      randomColors: randomColors,
      chosenColor: randomColors[Math.floor(Math.random() * 9)],
    });
  }

  render() {
    return (
      <div>
        <Header />
        <Controls />
        <GameBoard />
      </div>
    );
  }
}

export default App;
