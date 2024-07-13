import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";

import "./App.css";
import TodoItems from "./components/TodoItems";
import { useState } from "react";
import Welcome from "./components/Welcome";
function App() {
  const [todoitems, setTodoitems] = useState([]);

  const handleNewItem = (itemName, itemDuDate) => {
    console.log(`${itemName} ${itemDuDate}`);
    const newTodoItem = [
      {
        name: itemName,
        DuDate: itemDuDate,
      },
      ...todoitems,
    ];
    setTodoitems(newTodoItem);
  };

  //deleted-----------
  const todoItemDelete = (todoitemName) => {
    const newTodoItems = todoitems.filter((item) => item.name!=todoitemName);
    setTodoitems(newTodoItems);
    console.log(`delete item ${todoitemName}`);
  };

  return (
    <center className="TodoContainer">
      <AppName />

      <AddTodo onNewitem={handleNewItem} />
      {todoitems.length === 0 && <Welcome />}

      <TodoItems todoitems={todoitems} onDeleteClick={todoItemDelete} />
    </center>
  );
}

export default App;
