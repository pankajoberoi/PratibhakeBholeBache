import React, { Children } from 'react'
import {Navigate} from 'react-router-dom'

const ProtectedPath = ({children,user}) => {
  if(user){
    return children
  }
  else{
    return <Navigate to="/login"/>
  }
}

export default ProtectedPath