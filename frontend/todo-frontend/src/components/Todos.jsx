// import PropTypes from "prop-types" 

const Todos = ({todos}) => {

const update = (id) => {
  fetch("http://localhost:3200/completed", {
    method: "PUT",
    body: JSON.stringify({ id }),
    headers: {
      "content-type": "application/json",
    },
  }).then(async (res) => {
    const json = await res.json();
    alert(json.msg);
  });
};

console.log(todos)
    return (
      <div>
        {todos && todos.map(function(todo){
          return (
            <div key ={todo.id}>
              <h2>{todo.title}</h2>
              <p>{todo.description}</p>
              <button onClick={() => update(todo.id)}>Mark as completed!!</button>
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
