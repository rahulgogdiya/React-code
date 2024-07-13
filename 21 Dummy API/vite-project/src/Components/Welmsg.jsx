import React from "react";

function Welmsg({ onGetPostClick }) {
  return (
    <>
      <h1 className="welcome">Welcome there are no post ,create post</h1>
      <button
      type="button"
      onClick={onGetPostClick}
      className="btn bg-primary text-white button">
        Get post from server
      </button>
    </>
  );
}

export default Welmsg;
