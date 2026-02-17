import React from 'react'
import { useNavigate } from 'react-router-dom'

const Sports = () => {

    const navigateBack=useNavigate()
    

  return (
    <div>
        <h1>Sports</h1>
        <button onClick={()=> navigateBack("/")}>Back to Dashborad</button>
        <button onClick={()=> navigateBack("/movies")}>Go to Movies</button>
    </div>
  )
}

export default Sports