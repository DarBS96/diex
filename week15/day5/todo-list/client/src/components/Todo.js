import React from "react";
import { useState, useRef, useEffect } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { FaTrashAlt, FaEdit } from "react-icons/fa";

function Todo(props) {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");
  const [isExist, setIsExist] = useState(false);
  const [editTodo, setEditTodo] = useState("");
  const [isEdit, setIsEdit] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    //Get the whole list when first loading the page
    axios
      .get("http://localhost:5000/todo")
      .then((res) => setTodos(res.data))
      .catch((err) => console.log(err.message));
  }, [todos]);

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

  const deleteTodo = async (id) => {
    //Delete todo
    const res = await axios.delete(`http://localhost:5000/todo/delete/${id}`);
    console.log(res);
  };

  const updateTodo = async (e, id) => {
    e.preventDefault();
    const res = await axios.put("http://localhost:5000/todo/update", {
      id,
      data: editTodo,
    });
    setIsEdit(null);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          value={todo}
          type="text"
          placeholder="Add a new TODO"
          //Define the name of thr input
          {...register("todo", { required: true })}
        />
        {/* //Validation values in the input */}
        {errors.todo && <p>TODO is required.</p>}
        {isExist ? <p>TODO already exists.</p> : ""}
        <button>Submit</button>
      </form>
      <ul>
        {todos?.map(({ todo, id }) => {
          return (
            <li key={id} style={{ listStyle: "none" }}>
              {todo}
              <FaTrashAlt onClick={() => deleteTodo(id)} />
              <FaEdit onClick={() => setIsEdit(id)} />
              {isEdit === id ? (
                <form onSubmit={(e) => updateTodo(e, id)}>
                  <input
                    onChange={(e) => setEditTodo(e.target.value)}
                    type="text"
                    value={editTodo}
                  />
                  <button>Update</button>
                </form>
              ) : null}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Todo;
