import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import "./App.css";
import TodoItems from "./components/TodoItems";
import { useReducer} from "react";
import Welcome from "./components/Welcome";
import { TodiItemContext } from "./store/todo-tems-store";

const todoItemReducer = (CurrStateTODO, action) => {
  let newTodoItem = CurrStateTODO;
  if (action.type === "NEW_ITEM") { 
    newTodoItem = [
      {
        name: action.paylode.itemName,
        DuDate: action.paylode.itemDuDate,
      },
      ...CurrStateTODO,
    ];
    return newTodoItem;
  } 
  else if (action.type === "DELETE_ITEM") {
    newTodoItem = CurrStateTODO.filter(
      (item) => item.name !== action.paylode.itemName
    );
  }
  return newTodoItem;
};

// -------------------------------------------------------

function App() {
  const [todoitems, dispatchTodoItems] = useReducer(todoItemReducer, []);

  const AddNewItem = (itemName, itemDuDate) => {
    const newitemAction = {
      type:  "NEW_ITEM",
      paylode: {
        itemName,
        itemDuDate,
      },
    };
    dispatchTodoItems(newitemAction);
   
  };

  //deleted--------------------------------------------------
  const DeleteItem = (todoitemName) => {

    const DeleteitemAction = {
      type: "DELETE_ITEM",
      paylode: {
        itemName: todoitemName, 
      },
    };
    dispatchTodoItems(DeleteitemAction);
  };
// ------------------------------------------------------------
  return (
    <TodiItemContext.Provider
      value={{
        todoitems,
        AddNewItem,
        DeleteItem
      }}
    >
      <center className="TodoContainer">
        <AppName/>
        <AddTodo/>
        <Welcome/>
        <TodoItems/>
      </center>
    </TodiItemContext.Provider>
  );
}

export default App;