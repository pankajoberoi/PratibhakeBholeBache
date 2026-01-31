import UserRole from "./Component/UserRole"
import WelcomeMessage from "./Component/WelcomeMessage"

function App() {

  // let isLoggedIn=true

  let role="Admin"

  return (
   <>
      {/* <WelcomeMessage isLoggedIn={isLoggedIn}/> */}

      <UserRole role={role}/>
    
   </>
  )
}

export default App
