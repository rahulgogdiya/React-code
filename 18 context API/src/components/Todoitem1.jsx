import { useContext } from "react";
import { TodiItemContext } from "../store/todo-tems-store";

function Todoitem1({ todoName, todoDate}) {
  // let todoName = "Go to collage";
  // let todoDate = "10-3-2024";

  const {DeleteItem} = useContext(TodiItemContext);

  return (
    <div className="container">
      <div className="row kg-row">
        <div className="col-6">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-danger kg-btn"
            onClick={() => DeleteItem(todoName)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
export default Todoitem1;
