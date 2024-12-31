// import PropTypes from "prop-types" 
import { useState } from "react";
import { todo } from "../../../../backend/db";

const Todos = () => {
  const [todos, setTodos ] = useState(todo)
    function update()
    {
      setTodos(([...todos])=>{
        todos.completed == true ? "Completed" : "Mark as Complete"
    });}
  
console.log(todos)
    return (
      <div>
        {todos && todos.map(function(todo){
          return (
            <div key ={todo.id}>
              <h2>{todo.title}</h2>
              <p>{todo.description}</p>
              <button onClick={update}>Mark as completed!!</button>
            </div>
          )
        })}
      </div>
    )
  }


// export default Todos
// function Todo({title,description}){
//   return <div>
//     <h1>{title}</h1>
//     <h4>{description}</h4>
//   </div>
// }
export default Todos

