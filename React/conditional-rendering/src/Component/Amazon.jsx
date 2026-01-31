import React from 'react'
import Baner from './Baner'

const Amazon = ({status}) => {
    let prices=1200
  return (
    <div>

        {prices<1000 && <Baner/>}


        <h1>
            Amazon welcomes you!!!
        </h1>


        <h3>Your status is {status ? 'Online':'Offline'}</h3>
    </div>
    
  )
}

export default Amazon