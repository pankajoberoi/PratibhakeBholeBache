import React from 'react'

const InputDemo = () => {

    function handleChange(e){
        console.log(e.target.value);
    }

  return (
    <div>

        Name : <input type="text" placeholder='Enter your name' onChange={handleChange}/>

    </div>
  )
}

export default InputDemo