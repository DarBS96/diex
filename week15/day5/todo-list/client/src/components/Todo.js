import React from "react";
import DisplayEachTodo from "./DisplayEachTodo";
import AddingTodo from "./AddingTodo";

function Todo(props) {
  return (
    <div>
      <AddingTodo />
      <DisplayEachTodo />
    </div>
  );
}

export default Todo;

// components:
// 1: input & button - adding todo
// 2: one list  <li> import delete and edit to this component
// 3: delete
// 4: edit
