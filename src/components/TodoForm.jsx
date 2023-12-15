import React, { useState } from 'react'
import {useTodo} from '../context/index.js'
const TodoForm = () => {
    const [todo,setTodo] =useState("")
    const {addTodo} =useTodo()
    const add=(e)=>{
        e.preventDefault();
        if(!todo) return;
        addTodo({todo})
        setTodo("")      
             
     }

  
  return (
    <>
    <div className='flex'>
        <form onSubmit={add} className='max-w-md sm:mx-auto pt-8'>
          <h1 className='text-gray-100 text-4xl font-sans font-bold text-center m-10'>MY TODO </h1>
            <input className='focus:outline-none border rounded-md p-2 w-72' type="text" value={todo} onChange={(e)=> setTodo(e.target.value)} placeholder='✍️ Add item...' />
            <button className='w-20 m-2 text-white font-serif p-2 border bg-red-600 rounded-md' type="submit">+</button>
        </form>
    </div>
    </>
  )
}

export default TodoForm