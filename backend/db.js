import dotenv from 'dotenv';
import mongoose from 'mongoose';
// import { boolean, string } from "zod"

dotenv.config()
const mongoUri = process.env.MONGO_URI

mongoose.connect(mongoUri); //import conncetion url from ENV files
const todoSchema = new mongoose.Schema({
    title:String,
    description:String,
    completed:Boolean
})
export const todo = mongoose.model("todos", todoSchema);
