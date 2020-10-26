import React from 'react';
import ColorSquare from './ColorSquare';
import { useSelector } from 'react-redux';
import { selectColors } from '../store/reducers/colorsReducer';

const GameBoard = () => {
  const colorGrid = [];
  const colors = useSelector(selectColors);

  colors.forEach((color) => {
    colorGrid.push(<ColorSquare color={color} key={color} />);
  });
  return <div id="game-board">{colorGrid}</div>;
};

export default GameBoard;
