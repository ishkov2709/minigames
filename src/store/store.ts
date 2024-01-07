import { configureStore } from '@reduxjs/toolkit';
import { ticTacToeReducer } from './ticTacToe/ticTacToeSlice';
import { hangmanReducer } from './hangman/hangmanSlice';

export const store = configureStore({
  reducer: {
    ticTacToe: ticTacToeReducer,
    hangman: hangmanReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
