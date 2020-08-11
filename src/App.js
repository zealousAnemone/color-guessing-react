import React from 'react';
//import logo from "./logo.svg";
import './App.css';
import Header from './components/Header.js';
import Controls from './components/Controls.js';
import GameBoard from './components/GameBoard.js';
import Footer from './components/Footer.js';

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
    this.checkWin = this.checkWin.bind(this);
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
      won: false,
      randomColors: randomColors,
      chosenColor: randomColors[Math.floor(Math.random() * this.state.num)],
    });
  }

  setDifficulty(num) {
    this.setState({ num });
  }

  checkWin(color) {
    if (color === this.state.chosenColor) {
      this.setState({ won: true });
    }
  }

  componentDidMount() {
    this.getColors();
  }

  render() {
    return (
      <div id="main">
        <Header chosenColor={this.state.chosenColor} won={this.state.won} />
        <Controls
          getColors={this.getColors}
          won={this.state.won}
          setDifficulty={this.setDifficulty}
          num={this.state.num}
        />
        <GameBoard
          randomColors={this.state.randomColors}
          chosenColor={this.state.chosenColor}
          checkWin={this.checkWin}
          num={this.state.num}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
