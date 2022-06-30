import logo from "./logo.svg";
import "./App.css";
import AddNumbers from "./components/AddNumbers";
import React from "react";

class App extends React.Component {
  state = { total: 0 };
  sumNumbers = (num1, num2) => {
    this.setState({ total: num1 + num2 });
    console.log(this.state.total);
  };

  render() {
    return (
      <div className="App">
        <AddNumbers sumNumbers={this.sumNumbers} />
        <p>{`Total: ${this.state.total}`}</p>
      </div>
    );
  }
}

export default App;
