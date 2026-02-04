import React, { useState } from 'react'

const PrintForm = () => {

    let [name,setName]=useState('')
    let [email,setEmail]=useState('')


    function handleName(e){
        setName(e.target.value)
    }

  return (
    <div>
        Name: <input type="text" placeholder='Enter your name' onChange={handleName}/>
        email : <input type='email' placeholder='Enter your email' onChange={(e)=>setEmail(e.target.value)}/>

        <h3>Your name is {name}</h3>
        <h3>Your email is {email}</h3>


    </div>
  )
}

export default PrintForm