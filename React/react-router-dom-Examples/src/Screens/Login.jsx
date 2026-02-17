import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
const Login = ({setUser}) => {

    const [form,setForm]=useState({
        email:"",
        password:""
    })

    const navigate=useNavigate()

    function handleChange(e){
        setForm({...form,[e.target.name]:e.target.value})
    }

    function handleSubmit(e){
        e.preventDefault()

        if(form.email == "admin@gmail.com" && form.password=="123456"){
            setUser("Admin")
            navigate("/dashboard")
        }
        else{
            alert("Invalid Credentials")
        }
    }


  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="email"
            name="email"
            value={form.email}
            placeholder='Email'
            onChange={handleChange}
            />

            <input type="password"
            name="password"
            value={form.password}
            placeholder='password'
            onChange={handleChange} />

            <button type='submit'>Login</button>
        </form>
    </div>
  )
}

export default Login