import React, { Component } from "react";
import { connect } from "react-redux";
import MovieDetails from "./MovieDetails";
import { showDetails } from "../actions/actions";

class MovieList extends Component {
  constructor(props) {
    super();
    console.log(props);
  }

  render() {
    const { moviesList } = this.props;
    return (
      <div>
        <h1>Redux Movies</h1>
        <h3>Movie List</h3>
        <ul>
          {moviesList.map((movie, idx) => (
            <li key={idx} style={{ listStyle: "none" }}>
              {movie.title}
              <button onClick={() => this.props.showMovieDetails(movie)}>
                Show Details
              </button>
            </li>
          ))}
        </ul>
        <MovieDetails />
      </div>
    );
  }
}

const mapStateToProps = (store) => {
  console.log(store);
  //This func is equal to useSelector
  return {
    moviesList: store.moviesReducers.movies,
    movieSelected: store.moviesReducers.selectedMovie,
  };
};

const mapDispatchToProps = (dispatch) => {
  //This func is equal to useDispatch
  return {
    showMovieDetails: (movie) => {
      dispatch(showDetails(movie));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieList);
