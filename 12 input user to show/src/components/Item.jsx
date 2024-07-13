import React from "react";
import styles from "./Item.module.css";

function Item({ fooditem, boutght, handleBuyButton }) {
  return (
    <li
      className={`${styles[("items", "display")]} ${boutght && 'Active'}  `}
    >
      {fooditem}
      <button onClick={handleBuyButton} className={styles.button}>
        Buy
      </button>
    </li>
  );
}

export default Item;
