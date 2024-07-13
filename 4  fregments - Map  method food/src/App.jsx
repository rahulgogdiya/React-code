function App() {
  let foodItems = ["dal", "roti", "green vegetable", "salad", "milk", "rahul"];

  return (
    <>
      <h1>Healthy food</h1>
      <ul>
        {foodItems.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
