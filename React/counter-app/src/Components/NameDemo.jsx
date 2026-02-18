import React, { useState } from 'react'

const NameDemo = () => {

    const [name,setName]=useState("Pankaj")

    function handleClick(){
        setName("Vishal")
        console.log(name);
    }

  return (
    <div>
        <h1>My name is {name}</h1>
        <button onClick={handleClick}>change name</button>
    </div>
  )
}

export default NameDemo