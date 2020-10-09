import { createSlice } from '@reduxjs/toolkit';

const colorsSlice = createSlice({
  name: 'colors',
  initialState: {
    difficulty: 'easy',
    currentColors: [],
    chosenColor: '',
  },
  reducers: {
    newColors: (state) => {
      let red, blue, green;
      let diff;
      state.difficulty === 'easy' ? (diff = 3) : (diff = 9);

      for (let i = 0; i < diff; i++) {
        red = Math.floor(Math.random() * 255);
        green = Math.floor(Math.random() * 255);
        blue = Math.floor(Math.random() * 255);

        let color = `rgb(${red}, ${green}, ${blue})`;
        state.currentColors.push(color);
      }
    },
    setDifficulty: (state) => {
      if (state.difficulty === 'easy') {
        state.difficulty = 'hard';
      } else {
        state.difficulty = 'easy';
      }
    },
    chooseColor: (state) => {
      state.chosenColor =
        state.currentColors[
          Math.floor(Math.random() * state.currentColors.length)
        ];
    },
  },
});

export const selectColors = (state) => state.colors.currentColors;
export const selectDifficulty = (state) => state.colors.difficulty;
export const selectChosenColor = (state) => state.colors.chosenColor;

export const { newColors, setDifficulty, chooseColor } = colorsSlice.actions;

export default colorsSlice.reducer;
