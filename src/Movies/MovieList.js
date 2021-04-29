import React, { useState } from "react";
import { connect } from "react-redux";
import Movie from "./Movie";
import { searchMovies } from "../reducers/reducer";
function MovieList({ searchMovies, results, fav_movies, isLoading }) {
  const [movies, setMovies] = useState(true);
  const [value, setValue] = useState("");
  return (
    <div className="App">
      <input value={value} onChange={(e) => searchMovies(e.target.value)} />
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
function mapStateToProps(state) {
  return {
    results: state.results,
    fav_movies: state.fav_movies,
    isLoading: state.isLoading
  };
}
const mapDispatchToProps = (dispatch) => {
  return {
    searchMovies: (movie) => {
      dispatch(searchMovies(movie));
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(MovieList);
