import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from './components/Header';
import Controls from './components/Controls';
import GameBoard from './components/GameBoard';
import { selectColors, newColors } from './store/reducers/colorsReducer';

const App = () => {
  const dispatch = useDispatch();
  const currentColors = useSelector(selectColors);

  useEffect(() => {
    dispatch(newColors());
  }, []);

  return (
    <div>
      <Header />
      <Controls />
      <GameBoard />
      {console.log(currentColors)}
    </div>
  );
};

export default App;
