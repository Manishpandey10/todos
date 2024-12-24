import zod from 'zod'

const createTodo = zod.object({
        title:zod.string(), 
        description:zod.string(),
})
const updateTodo = Zod.object({
    id:zod.string(),
})

module.exports ={
    createTodo:createTodo, 
    updateTodo:updateTodo
}
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