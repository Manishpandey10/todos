import mongoose from "mongoose"
// import { boolean } from "zod"
mongoose.connect("mongodb+srv://admin:admin%4011@cluster0expmanish.izoem.mongodb.net/")//import conncetion url from ENV files
const todoSchema = mongoose.schema({
    title:string,
    description:string,
    completed:boolean
})

const todo = mongoose.model('todos',todoSchema)

module.exports= {
    todo:todo
}

