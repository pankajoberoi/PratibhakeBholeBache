import React from 'react'
import { Outlet } from 'react-router-dom'

const Amazon = () => {
  return (
    <div>
        <h1>Amazon</h1> 
  
        <Outlet/>

    </div>
  )
}

export default Amazon