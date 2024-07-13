import styles from "./Foodinput.module.css";
import React from "react";

function Foodinput() {
  const handleOnchange = (e) => {
    console.log(e.target.value);
  };

  return (
    <input
      type="text"
      placeholder="Enter Food item here"
      // onChange={(e)=>console.log(e.target.value)}
      onChange={handleOnchange}
    />
  );
}

export default Foodinput;
