import React from 'react'
import AppName from './components/AppName'
import AddTodo from './components/AddTodo'
import Todoitem1 from './components/Todoitem1'
import Todoitem2 from './components/Todoitem2'

function App() {
  return (
    <center>
      <AppName/>
      <br />
      <AddTodo/>
      <br />
      <Todoitem1/>
      <br />
      
      <Todoitem2/>
    
    </center>
  )
}

export default App