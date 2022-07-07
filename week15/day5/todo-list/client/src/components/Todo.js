import React from "react";
import { useState, useRef, useEffect } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

function Todo(props) {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    //Send data to server
    const options = {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    };
    await fetch("http://localhost:5000/todo", options);

    //Get the data from the server
    const res = await axios("http://localhost:5000/todo");
    setTodos(res.data);
  };

  console.log(todos);
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="Add a new TODO"
          //Define the name of thr input
          {...register("todo", { required: true })}
        />
        {/* //Validation values in thr input */}
        {errors.todo && <p>TODO is required.</p>}
        <button>Submit</button>
      </form>
      <ul>
        {todos?.map(({ todo, id }) => {
          return (
            <li key={id} style={{ listStyle: "none" }}>
              {todo}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Todo;
