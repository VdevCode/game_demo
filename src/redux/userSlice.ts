import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    status: false,
    user: {},
  },
  reducers: {
    userLoginSucess: (state, action) => {
      state.status = true;
      state.user = { ...action.payload };
    },
  },
});

export const { userLoginSucess } = userSlice.actions;

export default userSlice.reducer;
