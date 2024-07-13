import { useState } from "react";
import Container from "./components/Container";
import ErrorMsg from "./components/ErrorMsg";
import Foodinput from "./components/Foodinput";
import Fooditems from "./components/Fooditems";


function App() {
  // let foodItems = ["dal", "roti", "green vegetable", "salad", "milk", "rahul"];
  let [foodItems, setfoodItems] = useState(["kk"]);


  const handleOnchange = (e) => {
    if(e.key === 'Enter'){
      let newFoodItem = e.target.value;
      let newItems = [newFoodItem,...foodItems]
      setfoodItems(newItems)
      e.target.value = ''
      
    }
   
  };

  return (
    <Container>
      <h1 className="heading">Healthy food</h1>
      <center>
       
        <Foodinput handleOnchange={handleOnchange} />
      </center>
      <br />
     
      <Fooditems items={foodItems} />
      <ErrorMsg items={foodItems} />
    
    </Container>
  );
}

export default App;
