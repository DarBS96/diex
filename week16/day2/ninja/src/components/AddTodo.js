import React, { useState } from "react";
import { addTodo } from "../features/todoSlice";
import { useDispatch } from "react-redux";

function AddTodo(props) {
  const [txt, setTxt] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo(txt));
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="ADD A NEW TODO"
          onChange={(e) => setTxt(e.target.value)}
        />
        <button>submit</button>
      </form>
    </div>
  );
}

export default AddTodo;
