import "./App.css";
import BuggyCounter from "./components/BuggyCounter";
import ErrorBoundary from "./components/ErrorBoundary";
import { FavoriteColor } from "./components/FavoriteColor";
import React, { Component } from "react";

class Child extends Component {
  componentWillUnmount() {
    alert("The component is going to be unmounted");
  }

  render() {
    return (
      <div>
        <header>Hello world</header>
      </div>
    );
  }
}

class App extends Component {
  state = { show: true };
  render() {
    if (this.state.show) {
      return (
        <div className="App">
          <Child />
          {/* First simulation */}
          {/* <ErrorBoundary>
        <BuggyCounter />
        <BuggyCounter />
      </ErrorBoundary> */}
          {/* Second simulation */}
          {/* <ErrorBoundary>
        <BuggyCounter />
      </ErrorBoundary>
      <ErrorBoundary>
        <BuggyCounter />
      </ErrorBoundary> */}
          {/* Third simulation */}
          {/* <BuggyCounter /> */}
          {/* <FavoriteColor /> */}
          <button onClick={() => this.setState({ show: false })}>Delete</button>
        </div>
      );
    }
  }
}

export default App;
