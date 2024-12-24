import express from "express";
import {createTodo, updateTodo} from "./types.js"
import { todo } from "./db.js";
// import cors from "cors"
const app = express();
app.use(express.json());
app.use(cors())

// app.use(port);




app.get("/", async function (req, res) {
  const todo = await todo.find({});
  console.log(todo);
  res.json({
    todo:[],
  });
});




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
app.listen(3200)