import {
  addTodo,
  getDataFromDB,
  deleteTodo,
  updateTodoInDB,
} from "../database/todoList.js";

export const getDataFromUser = (req, res, next) => {
  const { todo } = req.body;
  addTodo("todolist", { todo })
    .then((response) => res.status(200).json("successfully added"))
    .catch((err) => console.log(err.message));
};

export const sendDataToUser = (req, res) => {
  getDataFromDB("todolist", "*")
    .then((response) => res.send(response))
    .catch((err) => console.log(err));
};

export const deleteTodoFromDB = (req, res) => {
  const { id } = req.params;
  deleteTodo("todolist", { id })
    .then((response) => res.status(200).json("successfully deleted"))
    .catch((err) => console.log(err));
};

export const updateTodo = (req, res) => {
  const { id, data } = req.body;
  updateTodoInDB("todolist", { id }, { todo: data })
    .then((response) => res.status(200).json("successfully updated"))
    .catch((err) => console.log(err));
};
