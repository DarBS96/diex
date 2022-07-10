import React from "react";
import { FaTrashAlt, FaEdit } from "react-icons/fa";
import axios from "axios";
import { useState, useEffect } from "react";

function DisplayEachTodo(props) {
  const [editTodo, setEditTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [isEdit, setIsEdit] = useState(null);

  useEffect(() => {
    //Get the whole list when first loading the page
    axios
      .get("http://localhost:5000/todo")
      .then((res) => setTodos(res.data))
      .catch((err) => console.log(err.message));
  }, [todos]);

  const updateTodo = async (e, id) => {
    e.preventDefault();
    const res = await axios.put("http://localhost:5000/todo/update", {
      id,
      data: editTodo,
    });
    setIsEdit(null);
  };

  const deleteTodo = async (id) => {
    //Delete todo
    const res = await axios.delete(`http://localhost:5000/todo/delete/${id}`);
    console.log(res);
  };

  return (
    <div>
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

export default DisplayEachTodo;
