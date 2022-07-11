import logo from "./logo.svg";
import "./App.css";
import { connect } from "react-redux";
import { increment, decrement } from "../src/actions/actions";
import React, { Component } from "react";
import MovieList from "./components/MovieList";

class App extends Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <div className="App">
        {/* <h1>Redux practice</h1>
        <button onClick={this.props.increment}>+</button>
        <div>{this.props.count}</div>
        <button onClick={this.props.decrement}>-</button> */}
        <MovieList />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  //Here we are getting the state from the reducer
  return {
    //return to props
    count: state.count,
  };
};
const mapDispatchToProps = (dispatch) => {
  //Here we are getting the action from the reducer
  return {
    //return to props
    increment: () => dispatch(increment("hello")),
    decrement: () => dispatch(decrement()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
