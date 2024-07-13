import React from 'react'

function Lodindig() {
  return (
    <div className="d-flex justify-content-center spiner">
    <div className="spinner-border prim" role="status" style={{width: "3rem", height: "3rem"}}>
      <span className="visually-hidden">Loading...</span>
    </div>
  </div>
  )
}

export default Lodindig