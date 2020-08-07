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
    this.setDifficulty = this.setDifficulty.bind(this);
  }

  getRandomColor() {
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);
    return `rgb(${red}, ${green}, ${blue})`;
  }

  setDifficulty(diff) {
    if (diff === "easy") {
      this.setState({ difficulty: "easy" });
    } else {
      this.setState({ difficulty: "hard" });
    }
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
        <Header chosenColor={this.state.chosenColor} />
        <Controls
          setDifficulty={this.setDifficulty}
          difficulty={this.state.difficulty}
        />
        <GameBoard />
      </div>
    );
  }
}

export default App;
