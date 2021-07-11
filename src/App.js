import React,{useState} from 'react';
import './App.css';
import {useDispatch, useSelector} from "react-redux"
import TodoItem from './TodoItem';
import { createTodo } from './redux/old/todo-actions';

const getTodos=state=>state.todoReducer

function App() {
  const [id,setId]=useState(0)
  const [text,setText]=useState('')
  const todoList=useSelector(state=>state.todoReducer)

 console.log(todoList)
  const dispatch=useDispatch()
  const handleCreate=()=>{
      dispatch(createTodo({text,id}))
  }
  return (
    <div className="App" >
        <div style={{border:"1px solid blue",padding:5,display:"flex",margin:5,justifyContent:"center",width:"fit-content",margin:"auto"}}>
              <button onClick={handleCreate}>Create</button>
              <input type="text" onChange={e=>setText(e.target.value)} placeholder="text"/>
              <input type="text" onChange={e=>setId(e.target.value)} placeholder="id"/>
        </div>
        {
          todoList.map(t=><TodoItem todo={t} key={t.id}/>)
        }
    </div>
  );
}

export default App;
