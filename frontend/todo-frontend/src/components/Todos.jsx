export function Todos({todos,setTodo}){

    return <div> 
        {todos.map(function(todo){
            return <div>
            <h1>{todo.title}</h1>
            <h2>{todo.description}</h2>
            <button>{todo.completed == true ?"completed":"Marked the task as completed"}</button>
    </div>
        })}
    </div>
}
