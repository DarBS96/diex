import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

function AddingTodo(props) {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");
  const [isExist, setIsExist] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const todosArr = todos.map(({ todo }) => todo);
    if (todosArr.includes(data.todo)) {
      setIsExist(true);
      setTodo("");
    }
    try {
      // Send data to server
      const sendDataToUser = await axios.post(
        "http://localhost:5000/todo",
        data
      );
      console.log(sendDataToUser);
      //Get the data from the server
      const res = await axios("http://localhost:5000/todo");
      setTodos(res.data);
    } catch (err) {
      console.log(err.message);
    }
    setTodo("");
  };

  //Restart the value of the input with the way of using useForm
  register("todo", {
    onChange: (e) => {
      setTodo(e.target.value);
      setIsExist(false);
    },
  });
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          value={todo}
          type="text"
          placeholder="Add a new TODO"
          //Define the name of the input
          {...register("todo", { required: true })}
        />
        {/* //Validation values in the input */}
        {errors.todo && <p>TODO is required.</p>}
        {isExist ? <p>TODO already exists.</p> : ""}
        <button>Submit</button>
      </form>
    </div>
  );
}

export default AddingTodo;
