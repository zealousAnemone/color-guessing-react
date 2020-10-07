import React from 'react';
import Header from './components/Header';
import Controls from './components/Controls';
import GameBoard from './components/GameBoard';

const App = () => {
  return (
    <div>
      <Header />
      <Controls />
      <GameBoard />
    </div>
  );
};

export default App;
