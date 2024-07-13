import { useState } from "react";

function AddTodo({ onNewitem }) {
  const [todoName, setToduname] = useState("");
  const [tododate, setTodudate] = useState("");

  const handleName = (e) => {
    setToduname(e.target.value);
  };
  const handledate = (e) => {
    setTodudate(e.target.value);
  };
  const handlebuttonclick = () => {
    onNewitem(todoName, tododate);
    // setTodudate("");
    // setToduname("");
  };

  return (
    <div className="container text-center">
      <div className="row kg-row">
        <div className="col-6">
          <input
            type="text"
            placeholder="Enter To Do here"
            value={todoName}
            onChange={handleName}
          />
        </div>
        <div className="col-4">
          <input
            type="date"
            onChange={handledate}
            value={tododate}
          />
        </div>
        <div className="col-2">
          <button
            className="btn btn-success kg-btn"
            onClick={handlebuttonclick}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
export default AddTodo;