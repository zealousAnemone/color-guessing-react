import React from "react";
//import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header.js";
import Controls from "./components/Controls.js";
import GameBoard from "./components/GameBoard.js";
import Footer from "./components/Footer.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      randomColors: [],
      chosenColor: null,
      num: 3,
      won: false,
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
    const randomColors = [];
    for (let i = 0; i < this.state.num; i++) {
      randomColors.push(this.getRandomColor());
    }
    this.setState({
      randomColors: randomColors,
      chosenColor: randomColors[Math.floor(Math.random() * this.state.num)],
    });
  }

  setDifficulty(diff) {
    if (diff === "easy") {
      this.setState({ num: 3 });
    } else {
      this.setState({ num: 6 });
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
          num={this.state.num}
        />
        <GameBoard
          randomColors={this.state.randomColors}
          chosenColor={this.state.chosenColor}
          num={this.state.num}
          won={this.state.won}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
