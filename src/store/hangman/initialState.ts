type InitialStateType = {
  level: number;
  gameStatus: 'start' | 'win' | 'lose';
  mistakes: number;
};

const initialState: InitialStateType = {
  level: 1,
  gameStatus: 'start',
  mistakes: 0,
};
