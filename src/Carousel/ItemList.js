import React from "react";
import Item from "./Item";
const ItemList = ({ ItemList }) => {
  console.log(ItemList);
  return (
    <>
      {ItemList.map((item) => (
        <Item Item={item} />
      ))}
    </>
  );
};
export default ItemList;
