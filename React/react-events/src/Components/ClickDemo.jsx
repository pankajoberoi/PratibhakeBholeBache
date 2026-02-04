import React from 'react'

const ClickDemo = () => {

    function handleClick(){
        alert("Button Clicked")
    }


  return (
    <div>

        <button onClick={handleClick}>Click me</button>


    </div>
  )
}

export default ClickDemo