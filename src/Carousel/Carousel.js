import React, { useEffect, useState } from "react";
import Item from "./Item";
import ItemList from "./ItemList";
import { connect } from "react-redux";

const Carousel = ({ results }) => {
  const [item, setItem] = useState(0);
  return (
    <>
      <Item Item={results[item] ? results[item] : null} />{" "}
      <ItemList
        ItemList={
          results.length >= item
            ? results.filter((result) => result.imdbID !== results[item].imdbID)
            : null
        }
      />
    </>
  );
};
function mapStateToProps(state) {
  return {
    results: state.results
  };
}

export default connect(mapStateToProps)(Carousel);
