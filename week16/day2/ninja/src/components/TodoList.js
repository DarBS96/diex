import React, { useEffect } from "react";
import AddTodo from "./AddTodo";
import Todo from "./Todo";
import { useSelector } from "react-redux";
import { useState } from "react";

function TodoList(props) {
  const { todoList } = useSelector((store) => store.todoReducer);
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    setTodos(todoList);
  }, [todoList]);

  const displayAllTodos = () => {
    setTodos(todoList);
  };

  const displayActive = () => {
    const activeTodos = todoList.filter(({ done }) => !done);
    setTodos(activeTodos);
  };

  const displayCompleted = () => {
    const completedTodos = todoList.filter(({ done }) => done);
    setTodos(completedTodos);
  };
  return (
    <div>
      <h1>Todo list with Redux</h1>
      <AddTodo />
      <ul>
        {todos?.map(({ todo, id, done }) => {
          return <Todo key={id} todo={todo} id={id} done={done} />;
        })}
      </ul>
      <button onClick={displayAllTodos}>Display All</button>
      <button onClick={displayActive}>Display Active</button>
      <button onClick={displayCompleted}>Display Completed</button>
    </div>
  );
}

export default TodoList;
