import React, { Component } from "react";
import { connect } from "react-redux";

class MovieDetails extends Component {
  constructor(props) {
    super();
  }
  render() {
    console.log(this.props.selectedMovie);
    const { title, releaseDate, rating } = this.props.selectedMovie
      ? this.props.selectedMovie
      : {};
    return (
      <div>
        <h2> title: {title ? title : ""}</h2>
        <p>Release Date: {releaseDate ? releaseDate : ""}</p>
        <p>rating: {rating ? rating : ""}</p>
      </div>
    );
  }
}

const mapStateToProps = (store) => {
  return { selectedMovie: store.moviesReducers.selectedMovie.payload };
};

export default connect(mapStateToProps)(MovieDetails);
