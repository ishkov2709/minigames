import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState';

const hangmanSlice = createSlice({
  name: 'hangman',
  initialState,
  reducers: {
    setMistake: state => {
      state.mistakes += 1;
    },
    resetLevel: state => {
      state.mistakes = 0;
    },
    toNextLevel: state => {
      state.level += 1;
      state.gameStatus = 'start';
    },
    setWinStatus: state => {
      state.mistakes = 0;
      state.gameStatus = 'win';
    },
  },
});

export const hangmanReducer = hangmanSlice.reducer;

export const { setMistake, resetLevel, toNextLevel, setWinStatus } =
  hangmanSlice.actions;
