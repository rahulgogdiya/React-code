import { useState } from "react";
import styles from "./App.module.css";
import Button from "./Button";
import Display from "./Display";

function App() {
  let [calVal, setCalVal] = useState("");

  const onBtnClick = (btnText) => {
    if (btnText === 'c') {
      setCalVal('')
    } else if (btnText === '=') {
      const result = eval(calVal)
      setCalVal(result)
    } else {
      const newDisplayValue = calVal + btnText
      setCalVal(newDisplayValue)
    }
  };
  return (
    <div className={styles.calculater}>
      <Display displayVal={calVal} />
      <Button onBtnClick={onBtnClick} />
    </div>
  );
}

export default App;
