import React from 'react'

const Greeting = ({profile}) => {


    function handleGreeting(){
        alert(`hello ${profile}`)
    }


  return (
    <div>

        <button onClick={handleGreeting}>Good morning bol mereko</button>

    </div>
  )
}

export default Greeting