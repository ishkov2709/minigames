import { configureStore } from '@reduxjs/toolkit';
import { ticTacToeReducer } from './ticTacToe/ticTacToeSlice';

export const store = configureStore({
  reducer: ticTacToeReducer,
});
