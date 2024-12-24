import {z} from 'zod'

export const createTodo = z.object({
        title:z.string(), 
        description:z.string(),
})
export const updateTodo = z.object({
    id:z.string(),
})

// module.exports ={
//     createTodo:createTodo, 
//     updateTodo:updateTodo
// }
/*
    {
        title:string, 
        description:string,
        status:boolean,
    }

    {
        id:string;
    }
*/