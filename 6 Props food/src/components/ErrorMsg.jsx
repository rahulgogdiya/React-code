import React from 'react'

function  ErrorMsg({items}) {

  return (
    <>
    {items.length === 0  && <center><h2>Food items note define</h2></center>}
    </>
  )
}

export default ErrorMsg