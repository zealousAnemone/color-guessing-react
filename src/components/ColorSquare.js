import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectChosenColor,
  toggleWon,
  selectWon,
} from '../store/reducers/colorsReducer';

const ColorSquare = (props) => {
  const chosenColor = useSelector(selectChosenColor);
  const won = useSelector(selectWon);
  const dispatch = useDispatch();
  const [clicked, setClicked] = useState(false);
  const style = {
    backgroundColor: props.color,
  };

  if (clicked && !won) {
    style.backgroundColor = '#232323';
  } else if (won) {
    style.backgroundColor = chosenColor;
  }

  const checkWin = () => {
    if (chosenColor === props.color) {
      dispatch(toggleWon(true));
    } else {
      setClicked(true);
    }
  };
  return <div className="color-square" style={style} onClick={checkWin}></div>;
};

export default ColorSquare;
