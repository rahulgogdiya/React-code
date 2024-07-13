import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import "./App.css";
import TodoItems from "./components/TodoItems";
import { useState } from "react";
import Welcome from "./components/Welcome";
import { TodiItemContext } from "./store/todo-tems-store";
function App() {
  const [todoitems, setTodoitems] = useState([]);

  const AddNewItem = (itemName, itemDuDate) => {
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
  const DeleteItem = (todoitemName) => {
    const newTodoItems = todoitems.filter((item) => item.name != todoitemName);
    setTodoitems(newTodoItems);
    console.log(`delete item ${todoitemName}`);
  };

  return (
    <TodiItemContext.Provider
      value={{
        todoitems,
        AddNewItem,
        DeleteItem,
      }}
    >
      <center className="TodoContainer">
        <AppName />
        <AddTodo />
        <Welcome />
        <TodoItems />
      </center>
    </TodiItemContext.Provider>
  );
}

export default App;
