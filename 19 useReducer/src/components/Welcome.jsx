import React, { useContext } from 'react'
import { TodiItemContext } from '../store/todo-tems-store';

function Welcome() {
  // const ContextObj = useContext(TodiItemContext);
  // const todoitems = ContextObj.todoitems;

  //Destructure
  const {todoitems} = useContext(TodiItemContext);
  return (
    todoitems.length === 0 && <div>Welcome</div>
  )
}

export default Welcome