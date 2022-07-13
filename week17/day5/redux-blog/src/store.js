import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "./components/features/postsSlice";

export const store = configureStore({
  reducer: {
    postsReducer,
  },
});
