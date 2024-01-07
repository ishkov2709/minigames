import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState';

const hangmanSlice = createSlice({
  name: 'hangman',
  initialState,
  reducers: {},
});

export const hangmanReducer = hangmanSlice.reducer;
