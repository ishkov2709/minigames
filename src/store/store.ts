import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from '@reduxjs/toolkit';
import { ticTacToeReducer } from './ticTacToe/ticTacToeSlice';
import { hangmanReducer } from './hangman/hangmanSlice';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';

const hangmanPersistConfig = {
  key: 'hangman',
  storage,
  whitelist: ['level'],
};

const customizedMiddleware = getDefaultMiddleware({
  serializableCheck: false,
});

const rootReducer = combineReducers({
  ticTacToe: ticTacToeReducer,
  hangman: persistReducer(hangmanPersistConfig, hangmanReducer),
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: customizedMiddleware,
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
