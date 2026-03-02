import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Signup = () => {

    const navigate=useNavigate()
    const [form,setForm]=useState({
        name : "",
        email : "",
        password : ""
    })

    function handleChange(e){
        setForm({...form,[e.target.name]:e.target.value})
    }

    async function handleSubmit(e){
        e.preventDefault()
        try{
            const res=await axios.post('http://localhost:3000/capgemini/signup',form)
            alert(res.data.msg)
            navigate('/login')
        }catch(err){
            console.log(err)
        }
    }


  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder='Enter your Name' onChange={handleChange} name='name'/> <br />
            <input type="text" placeholder='Enter your Email' onChange={handleChange} name='email'/> <br />
            <input type="text" placeholder='Enter your Password' onChange={handleChange} name='password'/> <br />
            <button>Signup</button>
        </form>
    </div>
  )
}

export default Signup