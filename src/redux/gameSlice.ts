import {createSlice} from '@reduxjs/toolkit';

export const gameSlice = createSlice({
    name: 'game',
    initialState: {
        major: 'it',
        bee: 0,
    },
    reducers: {
        gameChangeMajor: (state, action) => {
            state.major = action.payload
        },
        gameChangeBee: (state, action) => {
            state.bee = action.payload
        }
    }

})

export const {
    gameChangeMajor,
    gameChangeBee
} = gameSlice.actions;

export default gameSlice.reducer;
