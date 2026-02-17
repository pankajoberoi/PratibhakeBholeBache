import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Amazon from './Screens/Amazon'
import Login from './Screens/Login'
import Dashboard from './Screens/Dashboard'
import { useState } from 'react'
import ProtectedPath from './Screens/Components/ProtectedPath'

function App() {

  const [user,setUser]=useState(null)

  const Pratibharouter=createBrowserRouter([
  {
    path:"/",
    element:<Amazon/>,
    children:[
      {
        path:"login",
        element:<Login setUser={setUser}/>
      },
      {
        path:"dashboard",
        element:(
          <ProtectedPath user={user}>
            <Dashboard user={user}/>
          </ProtectedPath>
        )

      }
    ]
  },
])
  

  return (
    <RouterProvider router={Pratibharouter}/>
  )
}

export default App
