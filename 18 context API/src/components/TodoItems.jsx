import React, { useContext } from "react";
import Todoitem1 from "./Todoitem1";
import { TodiItemContext } from "../store/todo-tems-store";

function TodoItems() {
  const {todoitems} = useContext(TodiItemContext);
  return (
    <div className="item-container">
      {todoitems.map((item) => (
        <Todoitem1
          todoName={item.name}
          todoDate={item.DuDate}
          key={item}
          // onDeleteClick={DeleteItem}
        />
      ))}
    </div>
  );
}

export default TodoItems;
