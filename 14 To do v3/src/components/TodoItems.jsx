import React from "react";
import Todoitem1 from "./Todoitem1";

function TodoItems({ todoitems, onDeleteClick }) {
  return (
    <div className="item-container">
      {todoitems.map((item) => (
        <Todoitem1
          todoName={item.name}
          todoDate={item.DuDate}
          key={item}
          onDeleteClick={onDeleteClick}
        />
      ))}
    </div>
  );
}

export default TodoItems;
