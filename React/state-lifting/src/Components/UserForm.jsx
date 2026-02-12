import React, { useState } from 'react'

const UserForm = ({setSave}) => {


    const [name,setName]=useState('')
    const [pass,setPass]=useState('')

    function handleSubmit(e){
        e.preventDefault()
        console.log(name,pass);
        setSave(true)
        setName('')
        setPass('')
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            Name : <input type='text'  value={name}  onChange={(e)=>setName(e.target.value)}/>
            Password : <input type='password'  value={pass} onChange={(e)=>setPass(e.target.value)}/>
            <button type='submit'>Save Response</button>
        </form>
    </div>
  )
}

export default UserForm