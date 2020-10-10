import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectChosenColor, toggleWon } from '../store/reducers/colorsReducer';

const ColorSquare = (props) => {
  const chosenColor = useSelector(selectChosenColor);
  const dispatch = useDispatch();

  const checkWin = () => {
    if (chosenColor === props.color) {
      dispatch(toggleWon());
    }
  };
  return (
    <div
      className="color-square"
      style={{ backgroundColor: props.color }}
      onClick={checkWin}
    ></div>
  );
};

export default ColorSquare;
