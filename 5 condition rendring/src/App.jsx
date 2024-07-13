function App() {
  let foodItems = [
    // "dal",
    // "roti",
    // "green vegetable",
    // "salad",
    // "milk",
    //  "rahul",
  ];

  // let foodItems = [];

  //  1 method condition rendring(if)---------------------------------
  
  //  if (foodItems.length === 0) {
  //   return <center> <h3>No food items</h3></center>;
  // }

  //  2 method condition rendring turnary operator-------------------------

  //  let ad2q  = foodItems.length === 0 ?  <center> <h3>No food items</h3></center> : null

  return (
    <>
      <h1>Healthy food items</h1>

      {/* 3 method -----------------=============*/}

      {/* {foodItems.length === 0 ?  <center> <h3>No food items</h3></center> : null} */}

      {/* End 3 method -----------------============= */}

      {/* {emptyMsg} */}

      {/* 4th method---------------------------- */}
      {foodItems.length === 0 && <center> <h3>No food items</h3></center>}
      {/* End 4th method---------------------------- */}


      <ul>
        {foodItems.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
