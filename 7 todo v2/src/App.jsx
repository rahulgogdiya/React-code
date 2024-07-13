import React from "react";
import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import Todoitems from "./components/Todoitems";

function App() {
  const todoitems = [
    {
      name: "rahul",
      dueDate: "22-05-24",
    },
    {
      name: "milk",
      dueDate: "22-05-24",
    },
  ];

  return (
    <center>
      <AppName />
      <AddTodo />
      <Todoitems todoitems={todoitems} />
    </center>
  );
}

export default App;
