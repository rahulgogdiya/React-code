import React from "react";
import styles from "./Button.module.css";

function Button({ onBtnClick }) {
  const buttonNames = [
    "c",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
    "delete"
  ];
  return (
    <>
      <div className={styles.btn}>
        {buttonNames.map((buttonName) => (
          <button
            className={styles.buttons}
            key={buttonName}
            onClick={() => onBtnClick(buttonName)}
          >
            {buttonName}
          </button>
        ))}
      </div>
    </>
  );
}

export default Button;
