import { useState, useRef } from "react";
import { IoAddCircleSharp } from "react-icons/io5";

function AddTodo({ onNewitem }) {
  const toDoNameelement = useRef();
  const duDate = useRef();

  const handlebuttonclick = (e) => {
    const todoName = toDoNameelement.current.value;
    const tododate = duDate.current.value;
    onNewitem(todoName, tododate);

    e.preventDefault();
    console.log(`no update ${todoName}  ${tododate}`);
  };

  return (
    <div className="container text-center">
      <form className="row kg-row" onSubmit={handlebuttonclick}>
        <div className="col-6">
          <input
            type="text"
            placeholder="Enter To Do here"
            ref={toDoNameelement}
          />
        </div>
        <div className="col-4">
          <input type="date" ref={duDate} />
        </div>
        <div className="col-2">
          <button className="btn btn-success kg-btn">
            <IoAddCircleSharp />
          </button>
        </div>
      </form>
    </div>
  );
}
export default AddTodo;




import { useState,useRef } from "react";
import { IoAddCircleSharp } from "react-icons/io5";

function AddTodo({ onNewitem }) {
  const [todoName, setToduname] = useState("");
  const [tododate, setTodudate] = useState("");

  const noUpDate =  useRef(0)

  const handleName = (e) => {
    setToduname(e.target.value);
    noUpDate.current += 1;
  };
  const handledate = (e) => {
    setTodudate(e.target.value);

  };
  const handlebuttonclick = (e) => {
    onNewitem(todoName, tododate);
    setTodudate("");
    setToduname("");
    console.log(`no update ${noUpDate.current}`)
    e.preventDefault()
    

  };

  return (
    <div className="container text-center">
      <form className="row kg-row" onSubmit={handlebuttonclick}>
        <div className="col-6">
          <input
            type="text"
            placeholder="Enter To Do here"
            value={todoName}
            onChange={handleName}
          />
        </div>
        <div className="col-4">
          <input type="date" onChange={handledate} value={tododate} />
        </div>
        <div className="col-2">
          <button className="btn btn-success kg-btn">
            <IoAddCircleSharp />
          </button>
        </div>
      </form>
    </div>
  );
}
export default AddTodo;