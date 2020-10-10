import { createSlice } from '@reduxjs/toolkit';

const colorsSlice = createSlice({
  name: 'colors',
  initialState: {
    difficulty: 'easy',
    currentColors: [],
    chosenColor: '',
    won: false,
  },
  reducers: {
    newColors: (state) => {
      const temp = [];
      let red, blue, green;
      let diff;
      state.difficulty === 'easy' ? (diff = 3) : (diff = 6);

      for (let i = 0; i < diff; i++) {
        red = Math.floor(Math.random() * 255);
        green = Math.floor(Math.random() * 255);
        blue = Math.floor(Math.random() * 255);

        let color = `rgb(${red}, ${green}, ${blue})`;
        temp.push(color);
      }
      state.currentColors = temp;
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
    toggleWon: (state, action) => {
      state.won = action.payload;
    },
  },
});

export const selectColors = (state) => state.colors.currentColors;
export const selectDifficulty = (state) => state.colors.difficulty;
export const selectChosenColor = (state) => state.colors.chosenColor;
export const selectWon = (state) => state.colors.won;

export const {
  newColors,
  setDifficulty,
  chooseColor,
  toggleWon,
} = colorsSlice.actions;

export default colorsSlice.reducer;
