import React from "react";

const Item = ({ Item }) => {
  return (
    <>
      <img src={Item !== null ? Item.Poster : null} />
      <h1>{Item !== null ? Item.Title : null}</h1>
    </>
  );
};
export default Item;
