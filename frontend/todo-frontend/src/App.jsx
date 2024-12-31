import { useState } from "react";
import { useEffect } from "react";
import "./App.css";
import CreateTodo from "./components/CreateTodo";
import Todos  from './components/Todos'

function App() {
  // const[]= useEffect({},[])
  // const [todos, setTodo] = useState(
  //   [
  //     {
  //       id: 1,
  //       title: "manish",
  //       description: "one two",
  //     },
  //     { id: 2, title: "mish", description: "one two three" },
  //     { id: 3, title: "msh", description: "one two four" },
  //   ]);

  // function addTodo() {
  //   setTodo([...todos, {
  //     id: 4,
  //     title: "manish pandey",
  //     description: Math.random(),
  //   }]);
  // }
  const [todos, setTodos]= useState([]);

  useEffect(()=>{
    const fetchTodos = async ()=>{
      const res= await fetch('http://localhost:3200/todos')
      const data = await res.json();
      console.log(data.todo)  
      setTodos(data.todo)
    }
    fetchTodos()

  },[])

  return (
    <div>
      <CreateTodo/>
      <Todos todos={todos}/>
      {/* <button onClick={addTodo}>Adding a Todo</button>
      {todos.map((todo) => <Todo id={todo.id} title={todo.title} description={todo.description} />)} */}
    </div>
  );
}

// function Todo({title,description}){
//   return <div>
//     <h1>{title}</h1>
//     <h4>{description}</h4>
//   </div>
// }

export default App;
