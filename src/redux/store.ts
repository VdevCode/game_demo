import { configureStore } from '@reduxjs/toolkit';
import gameReducer from './gameSlice';
import userReducer from './userSlice';

export const store = configureStore({
  reducer: {
    game: gameReducer,
    user: userReducer,
  },
});
