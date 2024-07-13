import { useState } from "react";
import { IoAddCircleSharp } from "react-icons/io5";

function AddTodo({ onNewitem }) {
  const [todoName, setToduname] = useState("");
  const [tododate, setTodudate] = useState("");

  const handleName = (e) => {
    setToduname(e.target.value);
  };
  const handledate = (e) => {
    setTodudate(e.target.value);
  };
  const handlebuttonclick = (e) => {
    onNewitem(todoName, tododate);
    setTodudate("");
    setToduname("");
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
