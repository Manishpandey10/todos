import express from "express";
import {createTodo, updateTodo} from "./types.js"
import { todo } from "./db.js";
import cors from "cors"
const app = express();
app.use(express.json());
app.use(cors())

// app.use(port);
const port = 3200



app.post("/todo", async function (req, res) {
  const createPayload = req.body;
  const parsedPayload = createTodo.safeParse(createPayload);
  if (!parsedPayload.success) {
    res.status(411).json({ msg: `there is something wrong with the todo` });
    return;
  }
  await todo.create({
    title: createPayload.title,
    description: createPayload.description,
    completed: false
  });
  res.json({
    msg: "todo task added!!!",
  });
});


app.get("/todos",  async function (req, res) {
  const todos = await todo.find({});
  // console.log(todo);
  res.json({
    todo:todos,
  });
});


app.put("/completed", async function (req, res) {
  const updatePayload = req.body;
  const parsedPayload = updateTodo.safeParse(updatePayload);
  if (!parsedPayload) {
    res.status(411).json({
      msg: "could not update!!",
    });
    return;
  }
  await todo.update({
    __id:req.body.id
  },{
    completed:true
  })
  req.json(
    {
        msg:"status updated!!"
    }
  )
});
app.listen(port ,()=>{
  console.log(`app is runnig on the port no: ${port}`)
})