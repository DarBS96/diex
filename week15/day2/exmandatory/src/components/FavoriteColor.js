import React, { Component } from "react";

export class FavoriteColor extends Component {
  constructor() {
    super();
    this.state = {
      favoriteColor: "Red",
      show: true,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ favoriteColor: "Yellow" });
    }, 2000);
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    return prevState.favoriteColor;
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    document.getElementById(
      "prev"
    ).textContent = `Before the update the favorite was ${snapshot}`;
    document.getElementById(
      "next"
    ).textContent = `The updated favorite is ${this.state.favoriteColor}`;
  }

  render() {
    const { favoriteColor } = this.state;
    return (
      <div>
        <h1>My favorite color is {favoriteColor}</h1>
        <p id="prev"></p>
        <p id="next"></p>
      </div>
    );
  }
}

export class Child extends Component {
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
