import { addTodo, getDataFromDB, deleteTodo } from "../database/todoList.js";

// deleteTodo("todolist", { id: 2 })
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));

export const getDataFromUser = (req, res) => {
  const { todo } = req.body;
  addTodo("todolist", { todo })
    .then((res) => console.log(res))
    .catch((err) => console.log(err.message));
  res.send();
};

export const sendDataToUser = (req, res) => {
  getDataFromDB("todolist", "*")
    .then((response) => res.json(response))
    .catch((err) => console.log(err));
};
