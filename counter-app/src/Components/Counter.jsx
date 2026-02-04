import React, { useState } from 'react'

const Counter = ({name}) => {
    
    let [count,setCount]=useState(5)
    // state   updater          initialState
   
    function handleIncrement()
    {
        setCount(count+1)
    }

    function handleDecrement(){
        setCount(count-1)
    }

    function handleReset(){
        setCount(5)
    }

  return (
    <div>
        <h1>{name}</h1>
        <button onClick={handleIncrement}>+</button>
            <h1>{count}</h1>
        <button onClick={handleDecrement}>-</button>
        <button onClick={handleReset}>Reset</button>
    </div>
  )
}

export default Counter