import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectChosenColor, toggleWon } from '../store/reducers/colorsReducer';

const ColorSquare = (props) => {
  const chosenColor = useSelector(selectChosenColor);
  const dispatch = useDispatch();

  // NEXT: Make square disappear if not right
  // NEXT: Make squares and header change color if won
  const checkWin = () => {
    if (chosenColor === props.color) {
      dispatch(toggleWon(true));
    } else {
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
