import styles from "./Foodinput.module.css";
import React from "react";

function Foodinput({ handleOnchange }) {
  return (
    <input
      type="text"
      placeholder="Enter Food item here"
      onKeyDown={handleOnchange}
    />
  );
}

export default Foodinput;
