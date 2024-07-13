import Container from "./components/Container";
import ErrorMsg from "./components/ErrorMsg";
import Foodinput from "./components/Foodinput";
import Fooditems from "./components/Fooditems";

function App() {
  let foodItems = ["dal", "roti", "green vegetable","rahul"];

  return (
    <Container>
      <h1 className="heading">Healthy food</h1>
      <Foodinput />
      <Fooditems items={foodItems} />
      <ErrorMsg items={foodItems} />
    </Container>
  );
}

export default App;
