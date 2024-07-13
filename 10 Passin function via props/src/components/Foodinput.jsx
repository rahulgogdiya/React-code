import styles from "./Foodinput.module.css";
import React from "react";

function Foodinput({ handleOnchange }) {

  return <input type="text"
    placeholder="Enter Food item here"
    // onChange={(e)=>console.log(e.target.value)}

    onChange={handleOnchange}
  />;
}

export default Foodinput;

