import React, { useState } from 'react'

const Theme = () => {

    let [dark,setDark]=useState(false)


  return (
    <div style={{
        background: dark ? "black" :"white"
    }}>
        <h1 style={{
        color: dark ? "white" :"black"
        }}>Hello Ji </h1>
        <button onClick={()=>setDark(!dark)}>Toggle Theme</button>
    </div>
  )
}

export default Theme