import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  newColors,
  selectDifficulty,
  setDifficulty,
  selectColors,
  chooseColor,
  selectWon,
} from '../store/reducers/colorsReducer';

const Controls = () => {
  const dispatch = useDispatch();
  const difficulty = useSelector(selectDifficulty);
  // const colors = useSelector(selectColors);
  const won = useSelector(selectWon);

  return (
    <div id="controls">
      <button
        onClick={() => {
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
