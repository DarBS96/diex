import React from "react";

class AddNumbers extends React.Component {
  state = { num1: "", num2: "" };
  onInputChange = (e) => {
    let value = e.target.value;
    this.setState({
      [e.target.name]: Number(value),
      [e.target.name]: Number(value),
    });
  };

  render() {
    console.log(this.state.num1, this.state.num2);

    const { num1, num2 } = this.state;
    return (
      <div>
        <h1>Adding Two Numbers</h1>
        <input
          type="number"
          name="num1"
          value={this.state.num1}
          onChange={this.onInputChange}
        />
        <input
          type="number"
          name="num2"
          value={this.state.num2}
          onChange={this.onInputChange}
        />
        <button onClick={() => this.props.sumNumbers(num1, num2)}>
          Add Them
        </button>
      </div>
    );
  }
}

export default AddNumbers;
