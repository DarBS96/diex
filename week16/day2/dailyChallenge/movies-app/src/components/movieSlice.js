import { createSlice } from "@reduxjs/toolkit";
import { useReducer, useState } from "react";

const initialState = "";

export const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    displayDetail: () => {},
  },
});
