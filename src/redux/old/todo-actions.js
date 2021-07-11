import {
    CREATE_TODO,
    EDIT_TODO,
    DELETE_TODO,

} from "./action-types"

export const createTodo=(todo)=>{
    return {type:CREATE_TODO,payload:todo}
}

export const editTodo=(todo)=>{
    console.log(todo)
    return {type:EDIT_TODO,payload:todo}
}

export const deleteTodo=(todo)=>{
    return {type:DELETE_TODO,payload:todo}
}