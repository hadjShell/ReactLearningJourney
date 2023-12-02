import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: 0,
  reducers: {
    increment: state => {
      return state + 1;
    },
    decrement: state => {
      return state - 1;
    },
    incrementByAmount: (state, action) => {
      return state + action.payload;
    },
  },
});

// Action creators
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

// Slice reducer function
export default counterSlice.reducer;

// Selector
export const selectCount = state => state.counter;
