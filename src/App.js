import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Header from './components/Header';
import Controls from './components/Controls';
import GameBoard from './components/GameBoard';
import { newColors, chooseColor } from './store/reducers/colorsReducer';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(newColors());
    dispatch(chooseColor());
  }, []);

  return (
    <div>
      <Header />
      <Controls />
      <GameBoard />
    </div>
  );
};

export default App;
