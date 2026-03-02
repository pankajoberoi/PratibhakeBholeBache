import React from 'react'
import {useState } from 'react'
import axios from 'axios'


const Login = () => {

    const [form,setForm]=useState({
        email:"",
        password:""
    })

     function handleChange(e){
        setForm({...form,[e.target.name]:e.target.value})
    }

    async function handleSubmit(e){
            e.preventDefault()
            try{
                const res=await axios.post('http://localhost:3000/capgemini/login',form)
                alert(res.data);
                
            }catch(err){
                console.log(err)
            }
        }

  return (
    <>
        <form onSubmit={handleSubmit}>
           
            <input type="text" placeholder='Enter your Email' onChange={handleChange} name='email'/> <br />
            <input type="text" placeholder='Enter your Password' onChange={handleChange} name='password'/> <br />
            <button>Login</button>

        </form>
    
    
    
    
    </>
  )
}

export default Login