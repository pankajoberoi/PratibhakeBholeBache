import React, { useState } from 'react'

const Todolist = () => {

    const[tasks,setTasks]=useState([])//list of tasks
    const[item,setItem]=useState('')//task -> input

    function handleClick(){
        setTasks([...tasks,item])   
        setItem('')
    }

  return (
    <div>
        Todo : <input  type='text' value={item} placeholder='Enter task' onChange={(e)=>setItem(e.target.value)}/>

        <button onClick={handleClick}>Add item</button>

        <ul>
            {tasks.map((t)=>(
                <li key={t}>{t}</li>
        ))}
        </ul>



    </div>
  )
}

export default Todolist