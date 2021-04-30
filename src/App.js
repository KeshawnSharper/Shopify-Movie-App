import "./styles.css";
import React, { useState } from "react";
import Carousel from "./Carousel/Carousel";
import { searchMovies } from "./reducers/actions";
import { connect } from "react-redux";
function App({ searchMovies }) {
  const [value, setValue] = useState("");
  const handleChange = (e) => {
    console.log(e.target.value);
    setValue(e.target.value);
    searchMovies(e.target.value);
  };
  return (
    <>
      <input value={value} onChange={(e) => handleChange(e)} />
      <Carousel />
    </>
  );
}
function mapStateToProps(state) {
  return {
    results: state.results
  };
}
const mapDispatchToProps = (dispatch) => {
  return {
    searchMovies: (movie) => {
      dispatch(searchMovies(movie));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
