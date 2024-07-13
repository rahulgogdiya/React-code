import styles from "./App.module.css"
import Button from "./Button";
import Display from "./Display";

function App() {
  return (
    <div className={styles.calculater}>
    <Display/>
    <Button/>
    </div>
  );
}

export default App;
