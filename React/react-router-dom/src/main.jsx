import { createRoot } from 'react-dom/client'
import App from './App'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Movies from './Screen/Movies'
import Sports from './Screen/Sports'
import TvShows from './Screen/TvShows'


const Pratibharouter=createBrowserRouter([
  {
    path:"/",
    element:<App/>
  },{
    path:"/movies",
    element:<Movies/>
  },{
    path:"/sports",
    element:<Sports/>
  },{
    path:"/tvshows",
    element:<TvShows/>
  }
])


createRoot(document.getElementById('root')).render(
  <RouterProvider router={Pratibharouter}/>
)
