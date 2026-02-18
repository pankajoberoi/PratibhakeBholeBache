import React from 'react'
import { useNavigate } from 'react-router-dom'

const ProductList = ({items}) => {

    const navigate = useNavigate()
  return (
    <div>
        <ul>
            {items.map((i)=>(
                <div key={i.id}>
                    <li>{i.id} : {i.name}</li> <button onClick={()=>navigate(`/products/${i.id}`)}>Go to Id</button> 
                </div> 
                
            ))}
        </ul>
    </div>
  )
}

export default ProductList