import React, { useState } from "react";
import Item from "./Item";

function Fooditems({ items }) {
  let [activeItems, setActivItems] = useState([])

  let onbuyBtn = (iteme) => {
    let newItems = [...activeItems, iteme]
    setActivItems(newItems)
    console.log(newItems)
  }

  return (
    <ul>
      {items.map((item) => (
        <Item
          key={item}
          fooditem={item}
          boutght={activeItems.includes(item)}
          handleBuyButton={(e) => onbuyBtn(item, e)}
        />
      ))}
    </ul>
  );
}

export default Fooditems;
