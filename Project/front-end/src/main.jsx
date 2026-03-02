import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Signup from './Screen/Signup.jsx'
import Login from './Screen/Login.jsx'

const CapgeminiRouter=createBrowserRouter([
  {
    path:'/',
    element:<App/>
  },
  {
    path:"/signup",
    element:<Signup/>
  },
  {
    path:"/login",
    element:<Login/>
  }

])



createRoot(document.getElementById('root')).render(
  <RouterProvider router={CapgeminiRouter}/>
)
