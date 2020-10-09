import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  newColors,
  selectDifficulty,
  setDifficulty,
  chooseColor,
} from '../store/reducers/colorsReducer';

const Controls = () => {
  const dispatch = useDispatch();
  const difficulty = useSelector(selectDifficulty);

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
      <button
        onClick={() => {
          dispatch(setDifficulty());
        }}
      >
        {difficulty === 'easy' ? 'Easy' : 'Hard'}
      </button>
    </div>
  );
};

export default Controls;
