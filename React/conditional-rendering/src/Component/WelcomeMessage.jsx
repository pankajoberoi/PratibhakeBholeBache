import React from 'react'
import Amazon from './Amazon'
import LoginForm from './LoginForm'

const WelcomeMessage = ({isLoggedIn}) => {
  if(isLoggedIn){

    let status=true
    return <Amazon status={status}/>
  }
  else{
    return <LoginForm/>
  }

}

export default WelcomeMessage