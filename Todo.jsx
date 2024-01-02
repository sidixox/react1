import { useEffect } from 'react';
import { useRef, useState } from 'react'
import TodoItems from '../TodoItems';
import './CSS/Todo.css'


const Todo = () => {

    const [todos,setTodos] = useState([]);
    const inputRef = useRef(null);
    const add = () => {
            setTodos([...todos,{no:count++,text:inputRef.current.value,display:""}])
            inputRef.current.value = "";

    }
      useEffect (()=>{
            console.log(todos);
            localStorage.setItem("todo",JSON,stringfy(todos))
      }, [todos])

  return (
    <div>
      <div className= 'todo'>
      <div className= "todo-header">To-Do List </div>
      <div className="todo-add"></div>
        <input ref={inputRef} type="text" placeholder='Add You Task' className = 'todo-input' />
        <div onClick={()=>{add()}} className = "todo-add-btn"> ADD </div>
        </div>
        <div className="todo-list">
          {todos.map((item,index)=>{
            return <TodoItems key = {index} no = {item.no} display= {item.display} text= {item.text}/>
          })}
        </div>
    </div>
  )
}

export default Todo
