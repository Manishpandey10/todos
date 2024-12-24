
// import { useEffect, useState } from 'react'
import './App.css'
import CreateTodo from './components/CreateTodo'
import Todos  from './components/Todos'

function App() {
  // const[]= useEffect({},[])
  // const [todos, setTodo]= useState([])


  return (
    <div>
      <CreateTodo/>
      <Todos / >
    </div>
  )
}

export default App
