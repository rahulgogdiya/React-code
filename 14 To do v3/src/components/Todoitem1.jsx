function Todoitem1({ todoName, todoDate, onDeleteClick }) {
  // let todoName = "Go to collage";
  // let todoDate = "10-3-2024";
  return (
    <div className="container">
      <div className="row kg-row">
        <div className="col-6">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-danger kg-btn"
            onClick={() => onDeleteClick(todoName)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
export default Todoitem1;