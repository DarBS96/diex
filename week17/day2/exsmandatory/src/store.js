import calculateReducer from "./features/calculatorSlice";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    calculateReducer,
  },
});
