import ErrorMsg from "./components/ErrorMsg";
import Fooditems from "./components/Fooditems";

function App() {
  let foodItems = ["dal", "roti", "green vegetable", "salad", "milk", "rahul"];
  // let foodItems = [];

  return (
    <>
      <h1 className="heading">Healthy food</h1>
      <Fooditems items={foodItems} />
      <ErrorMsg items={foodItems} />
    </>
  );
}

export default App;
