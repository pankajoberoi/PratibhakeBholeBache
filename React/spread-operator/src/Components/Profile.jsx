import React, { useState } from 'react'

const Profile = () => {

   const [user,setUser]= useState({
        name:"Pankaj",
        age:25
    })


  return (
    <div>
        <h1>Name : {user.name}</h1>
        <h1>Age : {user.age}</h1>

        Name : <input type="text" placeholder='Enter your name' onChange={(e)=> setUser({...user , name:e.target.value})}/> <br />

        <button onClick={()=> setUser({...user,age:user.age+1})}>Increase age</button>



    </div>
  )
}

export default Profile