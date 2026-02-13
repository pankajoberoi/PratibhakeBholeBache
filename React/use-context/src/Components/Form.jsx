import React from 'react'
import { useContext } from 'react'
import ThemeContext from '../Context/ThemeContext'

const Form = () => {

    const {dark}=useContext(ThemeContext)


  return (
    <div style={{
        border:"2px solid black",
        height:"200px",
        width:"300px",
        padding:"10px",
        margin:"10px",
        background:dark?"black":"white"

    }}>
        <form action="">
            Name <input type="text" /> <br/>
            PassWord <input type='pass'/> <br />
            <button type='save'>Submit</button>
        </form>
    </div>
  )
}

export default Form