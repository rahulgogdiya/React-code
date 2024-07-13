import React from "react";
import Item from "./Item";

function Fooditems({items}) {


  return (
    <ul>
      {items.map((item) => (
        <Item key={item} fooditem={item}
        handleBuyButton = { ()=> console.log(`${item}`)}
        />
      ))}
    </ul>
  );
}

export default Fooditems;
