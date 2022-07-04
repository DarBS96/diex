import React, { Component } from "react";

class BuggyCounter extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
    };
  }

  render() {
    const { counter } = this.state;
    try {
      if (counter > 5) {
        throw new Error("Crashed");
      }
    } catch (e) {
      console.log(e.message);
    }

    return (
      <div>
        <h1>{counter}</h1>
        <button onClick={() => this.setState({ counter: counter + 1 })}>
          Click to add
        </button>
      </div>
    );
  }
}

export default BuggyCounter;
