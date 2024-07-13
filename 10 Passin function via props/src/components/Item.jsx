import React from "react";
import styles from "./Item.module.css";

function Item({fooditem,handleBuyButton}) {
  //de-stecharing  let {fooditem} = props
  //de-stecharing   {props.fooditem}
  //de-stecharing dairect {fooditem}

  //inLine event Handle - onClick={()=> console.log (`${props.fooditem}`)}

  // const handleButton = (event) => {
  //   console.log(event);
  //   console.log(`${fooditem}`);
  // };
  return (
    <li>
      {fooditem}
      <button
        // onClick={(event) => handleBuyButton(event)}
        onClick={handleBuyButton}
        className={styles.button}
      >
        Buy
      </button>
    </li>
  );
}

export default Item;
