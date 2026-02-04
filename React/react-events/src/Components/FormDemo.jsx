import React from 'react'

const FormDemo = () => {

    function handleSubmit(e){
        e.preventDefault()
        console.log(e);
        console.log(`Your Name is ${e.target[0].value} and Password is ${e.target[1].value}`);
        console.log("Form submitted!!");
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            Name <input type="text" placeholder='Enter your name'/>
            Password <input type="password" minLength={6}/>
            <button type='submit'>Submit</button>
        </form>
    
    </div>
  )
}

export default FormDemo