import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: 0,
  reducers: {
    reset: (state) => {
      return (state = 0);
    },
    increase: (state) => {
      return state + 1;
    },
    decrease: (state) => {
      return state - 1;
    },
    increaseWithAmount: (state, action) => {
      return state + action.payload;
    },
    decreaseWithAmount: (state, action) => {
      return state - action.payload;
    },
  },
});
export const {
  increase,
  decrease,
  increaseWithAmount,
  decreaseWithAmount,
  reset,
} = counterSlice.actions;
export default counterSlice.reducer;
