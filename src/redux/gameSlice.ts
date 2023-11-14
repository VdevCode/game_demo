import { createSlice } from '@reduxjs/toolkit';

export const gameSlice = createSlice({
  name: 'game',
  initialState: {
    major: 0,
    bee: 0,
    win: false,
    hp: 0,
    defaultHp: 0,
    barriesDefault: 0,
    coins: 0,
  },
  reducers: {
    gameChangeMajor: (state, action) => {
      state.major = action.payload;
    },
    gameChangeBee: (state, action) => {
      state.bee = action.payload;
    },
    gameChangeOver: (state, action) => {
      state.win = action.payload.win;
      state.hp = action.payload.hp;
      state.defaultHp = action.payload.defaultHp;
      state.barriesDefault = action.payload.defaultBarries;
      state.coins = action.payload.coins;
    },
  },
});

export const { gameChangeMajor, gameChangeBee, gameChangeOver } =
  gameSlice.actions;

export default gameSlice.reducer;
