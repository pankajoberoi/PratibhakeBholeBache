import React from 'react'
import { useContext } from 'react'
import ThemeContext from '../Context/ThemeContext'


const ThemeButton = () => {

   const {dark,setDark} = useContext(ThemeContext)

  return (
    <div style={{
        background:dark?"black":"white"
    }}>
        <h1 style={{
            color:dark?"white":"black"
        }}>Learning Use Context</h1>
        <button onClick={()=> setDark(!dark)}>Toggle Theme</button>
    </div>
  )
}

export default ThemeButton