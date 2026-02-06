import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import ServerConnection from './ServerConnection'


const serverUrl="https://localhost:1234"
const Youtube = () => {

    const[category,setCategory]=useState('')
    const[watch,setWatch]=useState(false)

    useEffect(()=>{
        let connection=ServerConnection(serverUrl)
        connection.connect()  
    },[watch])

    function handleClick(){
        setWatch(!watch)
    }

  return (
    <div>

        Category <input type="text" placeholder='Enter category' onChange={(e)=> setCategory(e.target.value)}/>
        <button onClick={handleClick}>Watch Vedios</button>

        {(watch)?<h1>Vedios ka page with {category}</h1>:<h1>Home page</h1>}

    </div>
  )
}

export default Youtube