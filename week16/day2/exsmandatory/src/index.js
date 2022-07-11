import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createStore, combineReducers } from "redux";
import { calculateReducer } from "./reducers/calculateReducer";
import moviesReducers from "./reducers/movieReducer";
import { Provider } from "react-redux";

//Reducers of calculateReducer and the combineReducers of the moviesReducer
const reducers = combineReducers({
  moviesReducers,
  calculateReducer,
});
const store = createStore(reducers);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
