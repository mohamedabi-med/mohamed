// store/slice.ts
import { createSlice } from '@reduxjs/toolkit';

export const yourSlice = createSlice({
  name: 'yourSlice',
  initialState: {
    // Define your initial state here
  },
  reducers: {
    yourReducer: (state, action) => {
      // Define your reducer logic here
    },
  },
});

export const { yourReducer } = yourSlice.actions;

export default yourSlice.reducer;
