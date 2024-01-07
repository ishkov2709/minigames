type InitialStateType = {
  variant: null;
  ARRAY_FIELD: [0, 1, 2, 3, 4, 5, 6, 7, 8];
  exceptions: number[];
  playerChoise: number[];
  opponentChoise: number[];
  endGame: 'cross' | 'circle' | 'draw' | 'none' | null;
  tickStatus: boolean;
};

export const initialState: InitialStateType = {
  variant: null,
  ARRAY_FIELD: [0, 1, 2, 3, 4, 5, 6, 7, 8],
  exceptions: [],
  playerChoise: [],
  opponentChoise: [],
  endGame: null,
  tickStatus: false,
};
