import {
    CREATE_TODO,
    EDIT_TODO,
    DELETE_TODO,

} from "./action-types"

export const todoReducer=(state=[],action)=>{
    switch (action.type) {
        case CREATE_TODO:
            return [...state,action.payload]
        case EDIT_TODO:
            const arr=[...state]
            console.log(action.payload)
            let edited=arr.map(todo=>{
                if(todo.id===action.payload.id){
                    return action.payload
                }
                return todo
            })
            console.log(arr)
            return edited
        case DELETE_TODO:
            return [...state].filter(todo=>todo.id !==action.payload.id)
        default:
            return state
    }
}

export const counterReducer=(state=0,action)=>{
    switch (action.type) {
        case CREATE_TODO:
         return state+1
        default:
            return state
    }
}