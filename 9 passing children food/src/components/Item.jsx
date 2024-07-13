import React from "react";
import styles from "./Item.module.css";

function Item(props) {
  const handleButton = (event) => {
    console.log(event);
    console.log(`${props.fooditem}`);
  };
  return (
    <li className={`${styles[("items", "display")]}`}>
      {props.fooditem}
      <button
        onClick={(event) => handleButton(event)}
        className={styles.button}
      >
        Buy
      </button>
    </li>
  );
}

export default Item;
