import React from 'react'

const Demolist = () => {

    let cricketers=["Virat","Rohit","Bumrah","Hardik"]


  return (
    <div>
        <h1>Hello ji</h1>
        <ul>
            {cricketers.map((player)=>
            (
               <li key={player}>{player}</li>
            ))}

        </ul>    

    </div>
  )
}

export default Demolist