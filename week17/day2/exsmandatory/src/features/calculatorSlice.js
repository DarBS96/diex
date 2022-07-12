import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};

const calculatorReducer = createSlice({
  name: "calculator",
  initialState,
  reducers: {
    increment: (state) => {
      console.log(current(state));
      state.count = state.count + 1;
    },
    decrement: (state) => {
      state.count = state.count - 1;
    },
    incrementIfOdd: (state) => {
      if (!(state.count % 2 === 0)) state.count = state.count + 1;
    },
    incrementAsync: (state) => {
      state.count = state.count + 1;
    },
  },
});

export const { increment, decrement, incrementIfOdd, incrementAsync } =
  calculatorReducer.actions;

export default calculatorReducer.reducer;
