import React from "react";
import styles from "./Item.module.css";

function Item({ fooditem, handleBuyButton }) {
  return (
    <li className={`${styles[("items", "display")]}`}>
      {fooditem}
      <button
        // onClick={(event) => handleButton(event)}
        onClick={handleBuyButton}
        className={styles.button}
      >
        Buy
      </button>
    </li>
  );
}

export default Item;
