import React from "react";
import Todoitem from "./Todoitem";
function Todoitems({ todoitems }) {
  return (
    <>
      {todoitems.map((item) => (
        <Todoitem todoDate={item.dueDate} todoName={item.name} />
      ))}
    </>
  );
}

export default Todoitems;
