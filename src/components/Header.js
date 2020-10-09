import React from 'react';
import { useSelector } from 'react-redux';
import { selectChosenColor } from '../store/reducers/colorsReducer';

const Header = () => {
  const chosenColor = useSelector(selectChosenColor);
  return (
    <div>
      <h1>The Great {chosenColor} Guessing Game!</h1>
      <h2>Now in React!</h2>
    </div>
  );
};

export default Header;
