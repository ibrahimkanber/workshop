import React,{useState} from 'react'
import {useDispatch, useSelector} from "react-redux"
import { editTodo,deleteTodo } from './redux/old/todo-actions';

export default function TodoItem({todo}) {
    const dispatch=useDispatch()
    const [text,setText]=useState('')

    const handleEdit=()=>{
        dispatch(editTodo({text,id:todo.id}))
    }
    return (
        <div style={{display:'flex',border:"1px solid red",justifyContent:"space-between",padding:15,margin:15}}>
                <p style={{border:"3px solid green",padding:5}}>{todo.text}</p>
                
                <div style={{border:"1px solid blue",padding:5}}>
                    <button style={{padding:15,marginRight:5}} onClick={handleEdit}>Edit</button>
                    <input type="text" onChange={e=>setText(e.target.value)}/>
                </div>
                <button>Delete</button>
        </div>
    )
}
