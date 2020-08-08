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
    this.getColors = this.getColors.bind(this);
    this.setDifficulty = this.setDifficulty.bind(this);
  }

  getRandomColor() {
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);
    return `rgb(${red}, ${green}, ${blue})`;
  }

  getColors() {
    let num;
    this.state.difficulty === "easy" ? (num = 3) : (num = 6);
    const randomColors = [];
    for (let i = 0; i < num; i++) {
      randomColors.push(this.getRandomColor());
    }
    this.setState({
      randomColors: randomColors,
      chosenColor: randomColors[Math.floor(Math.random() * num)],
    });
  }

  setDifficulty(diff) {
    if (diff === "easy") {
      this.setState({ difficulty: "easy" });
    } else {
      this.setState({ difficulty: "hard" });
    }
  }

  componentDidMount() {
    this.getColors();
  }

  render() {
    return (
      <div>
        <Header chosenColor={this.state.chosenColor} />
        <Controls
          setDifficulty={this.setDifficulty}
          getColors={this.getColors}
          difficulty={this.state.difficulty}
        />
        <GameBoard randomColors={this.state.randomColors} />
      </div>
    );
  }
}

export default App;
