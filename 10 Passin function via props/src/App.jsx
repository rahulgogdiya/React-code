import Container from "./components/Container";
import ErrorMsg from "./components/ErrorMsg";
import Foodinput from "./components/Foodinput";
import Fooditems from "./components/Fooditems";

function App() {
  let foodItems = ["dal", "roti", "green vegetable", "salad", "milk", "rahul"];
  // let foodItems = [];

  let textShow = "Food item enter by user";

  const handleOnchange = (e) => {
    console.log(e.target.value);
    // textShow = e.target.value;
  };

  return (
    <Container>
      <h1 className="heading">Healthy food</h1>
      <center>
        <Foodinput handleOnchange={handleOnchange} />
      </center>
      <br />
      <center> {textShow}</center>
      <Fooditems items={foodItems} />
      <ErrorMsg items={foodItems} />
    </Container>
  );
}

export default App;
