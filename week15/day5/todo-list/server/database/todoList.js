import db from "./connection.js";

export const addTodo = (table, property) => {
  return db(table).insert(property).returning("*");
};

export const getDataFromDB = (table, property) => {
  return db(table).select(property).orderBy("id", "desc").returning("*");
};

export const deleteTodo = (table, where) => {
  return db(table).where(where).del().returning("*");
};

export const updateTodoInDB = (table, where, valuesToUpdate) => {
  return db(table).where(where).update(valuesToUpdate).returning("*");
};
