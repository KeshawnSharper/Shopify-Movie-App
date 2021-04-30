import React from "react";
import { connect } from "react-redux";
import { addNomination, deleteNomination } from "../reducers/actions";

const Movie = ({ Movie, nominations_indexes }) => {
  const {
    addNomination,
    deleteNomination,
    Title,
    Year,
    Poster,
    Type,
    imdbID
  } = Movie;

  return (
    <div>
      <h1>{Title}</h1>
      <img src={Poster} />
      {nominations_indexes[imdbID] === 1 ? (
        <button onClick={() => deleteNomination(Movie)}>
          Delete Nomination{" "}
        </button>
      ) : (
        <button onClick={() => addNomination(Movie)}> Add Nomination </button>
      )}
    </div>
  );
};
function mapStateToProps(state) {
  return {
    nominations_indexes: state.nominations_indexes
  };
}
const mapDispatchToProps = (dispatch) => {
  return {
    addNomination: (movie) => {
      dispatch(addNomination(movie));
    },
    deleteNomination: (movie) => {
      dispatch(deleteNomination(movie));
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Movie);
