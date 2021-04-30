import React, { useState } from "react";
import { connect } from "react-redux";
import Movie from "./Movie";
import { searchMovies } from "../reducers/actions";

function MovieList({ searchMovies, results, fav_movies, isLoading }) {
  const [movies, setMovies] = useState(true);
  const [value, setValue] = useState("");
  const handleChange = (e) => {
    setValue(e.target.value);
    searchMovies(value);
  };
  return (
    <div className="App">
      <input value={value} onChange={(e) => handleChange(e)} />
      {results.map((result) => (
        <Movie Movie={result} />
      ))}
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
