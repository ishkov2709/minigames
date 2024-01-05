import { configureStore } from '@reduxjs/toolkit';
import { ticTacToeReducer } from './ticTacToe/ticTacToeSlice';

export const store = configureStore({
  reducer: ticTacToeReducer,
});

export type RootState = ReturnType<typeof store.getState>;
