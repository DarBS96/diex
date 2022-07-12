import { createSlice, current } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  todoList: [],
};
const todoReducer = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todoList.push({
        todo: action.payload,
        id: uuidv4(),
        done: false,
      });
    },
    completedTodo: (state, action) => {
      const selectedTodo = state.todoList.findIndex(
        ({ todo, id }) => id === action.payload
      );
      state.todoList[selectedTodo].done = true;
    },
  },
});

export const { addTodo, completedTodo } = todoReducer.actions;

export default todoReducer.reducer;
