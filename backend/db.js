import mongoose from 'mongoose';
// import { boolean, string } from "zod"
mongoose.connect(
  "mongodb+srv://admin:admin%4011@cluster0expmanish.izoem.mongodb.net/LocalTesting"
); //import conncetion url from ENV files
const todoSchema = new mongoose.Schema({
    title:String,
    description:String,
    completed:Boolean
})
export const todo = mongoose.model("todos", todoSchema);
