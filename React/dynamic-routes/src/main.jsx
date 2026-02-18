import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import App from './App'
import ProductList from './Screens/ProductList'
import Product from './Screens/Product'







const items=[
  {id:1,name:"Laptop",price:50000},
  {id:2,name:"Phone",price:20000},
  {id:3,name:"Shoes",price:10000}
]

const PratbihaRouter=createBrowserRouter([
  {
    path:"/",
    element:<App/>
  },
  {
    path:"/products",
    element:<ProductList items={items}/>
  },{
    path:"/products/:id",
    element:<Product items={items}/>
  }
])



createRoot(document.getElementById('root')).render(
    <RouterProvider router={PratbihaRouter}/>
)
