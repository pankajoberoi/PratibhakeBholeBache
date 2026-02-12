import React, { useState } from 'react'

const UserForm = ({setSave}) => {


    const [name,setName]=useState('')
    const [pass,setPass]=useState('')
    const [show,setShow]=useState(false)


    let id=1
    const [user,setUser]=useState([
        {id:1,Username:"Pankaj",Userpass:12345}
    ])

    function handleSubmit(e){
        e.preventDefault()
        console.log(name,pass);

        setUser([...user,{id:id+1,Username:name,Userpass:pass}])

        console.log(user);

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

        <button onClick={()=>setShow(!show)}>Show Details</button>

        {show?user.map((u)=>(
            <div key={u.id}>
                <span>{u.Username}</span>
                <span>{u.Userpass}</span>
            </div>
        )):""}


    </div>
  )
}

export default UserForm