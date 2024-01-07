type InitialStateType = {
  level: number;
  gameStatus: 'start' | 'win' | 'lose';
  mistakes: number;
};

export const initialState: InitialStateType = {
  level: 1,
  gameStatus: 'start',
  mistakes: 0,
};
