import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  newColors,
  selectDifficulty,
  setDifficulty,
  selectChosenColor,
  toggleWon,
  chooseColor,
  selectWon,
} from '../store/reducers/colorsReducer';

const Controls = () => {
  const dispatch = useDispatch();
  const difficulty = useSelector(selectDifficulty);
  const chosenColor = useSelector(selectChosenColor);
  const won = useSelector(selectWon);

  const style = {
    backgroundColor: '#232323',
  };

  if (won) {
    style.backgroundColor = chosenColor;
  }

  return (
    <div id="controls" style={style}>
      <button
        onClick={() => {
          dispatch(toggleWon(false));
          dispatch(newColors());
          dispatch(chooseColor());
        }}
      >
        New Colors
      </button>
      <span className="won">{won && 'You Win!'}</span>
      <button
        onClick={() => {
          dispatch(setDifficulty());
          dispatch(toggleWon(false));
          dispatch(newColors());
          dispatch(chooseColor());
        }}
      >
        {difficulty === 'easy' ? 'Easy' : 'Hard'}
      </button>
    </div>
  );
};

export default Controls;
