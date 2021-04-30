import React, { useState } from "react";
import { connect } from "react-redux";
import Movie from "./Movie";
import { searchMovies } from "../reducers/actions";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import FormLabel from "@material-ui/core/FormLabel";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import Radio from "@material-ui/core/Radio";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  paper: {
    height: 140,
    width: 100
  },
  control: {
    padding: theme.spacing(2)
  }
}));
function MovieList({ searchMovies, results, fav_movies, isLoading }) {
  const [movies, setMovies] = useState(true);
  const [value, setValue] = useState("");
  const handleChange = (e) => {
    setValue(e.target.value);
    searchMovies(value);
  };
  const [spacing, setSpacing] = React.useState(2);
  const classes = useStyles();
  return (
    <div className="App">
      <input value={value} onChange={(e) => handleChange(e)} />
      <Grid container className={classes.root} spacing={2}>
        {results.map((result) => (
          <>
            <Grid item xs={4}>
              <Movie Movie={result} />
            </Grid>
          </>
        ))}
      </Grid>
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
