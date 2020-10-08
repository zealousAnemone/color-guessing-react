import { configureStore } from '@reduxjs/toolkit';
import colorsReducer from './reducers/colorsReducer';

export default configureStore({
  reducer: {
    colors: colorsReducer,
  },
});
