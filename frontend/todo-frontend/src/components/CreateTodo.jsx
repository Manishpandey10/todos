import { useState } from "react";

export default function CreateTodo() {
  const [title, setTitle] = useState("");
  const [description, setdescription] = useState("");
  return (
    <div>
      <input
        id="title"
        type="text"
        placeholder="Title"
        onChange={function (e) {
          const value = e.target.value;
          setTitle(value);
        }}

      ></input>
      <input
        id="description"
        type="text"
        placeholder="description"
        onChange={function (e) {
          const value = e.target.value;
          setdescription(value);
        }}
      ></input>

      <button
        onClick={() => {
          fetch("http://localhost:3200/todo", {
            method: "POST",
            body: JSON.stringify({
              title: title,
              description: description,
              completed:false
            }),
            headers: {
              "content-type": "application/json",
            },
          }).then(async function (res) {
            const json = await res.json();
            alert("Todo added");
            console.log(json);
          });
        }}
      >
        Add to ToDo List
      </button>
    </div>
  );
}
