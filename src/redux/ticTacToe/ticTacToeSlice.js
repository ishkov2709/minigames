import { createSlice } from '@reduxjs/toolkit';
import initialState from './initialState';

const ticTacToeSlice = createSlice({
  name: 'ticTacToe',
  initialState,
  reducers: {
    selectVariant: (state, { payload }) => {
      state.variant = payload;
    },
    selectPlayerTick: (state, { payload }) => {
      state.exceptions.push(payload);
      state.playerChoise.push(payload);
    },
    selectOpponentTick: (state, { payload }) => {
      state.exceptions.push(payload);
      state.opponentChoise.push(payload);
    },
    makeWinner: (state, { payload }) => {
      state.endGame = payload;
    },
    retry: state => {
      state.exceptions = [];
      state.playerChoise = [];
      state.opponentChoise = [];
      state.endGame = null;
    },
    reset: state => {
      state.variant = null;
      state.exceptions = [];
      state.playerChoise = [];
      state.opponentChoise = [];
      state.endGame = null;
    },
  },
});

export const ticTacToeReducer = ticTacToeSlice.reducer;

export const {
  selectVariant,
  selectPlayerTick,
  selectOpponentTick,
  makeWinner,
  retry,
  reset,
} = ticTacToeSlice.actions;
