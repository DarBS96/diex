import { useDispatch } from "react-redux";
import { completedTodo } from "../features/todoSlice";

function Todo({ todo, id, done }) {
  const dispatch = useDispatch();
  const handleClick = (e) => {
    dispatch(completedTodo(e.target.id));
  };

  return (
    <div>
      <li
        id={id}
        onClick={handleClick}
        style={{
          listStyle: "none",
          textDecoration: done ? "line-through" : "none",
        }}
      >
        {todo}
      </li>
    </div>
  );
}

export default Todo;
