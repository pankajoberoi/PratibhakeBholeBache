import React, {} from 'react'

const ShirtsInventory = ({quantity,setQuantity}) => {
    
  return (
    <div>
        <h1>Total Quantity of Shirts in my Invertory is {quantity}</h1>
        <button onClick={()=>setQuantity(quantity+1)}>Add Shirts</button>
        <button onClick={()=>setQuantity(quantity-1)}>Sell Shirts</button>
    </div>
  )
}

export default ShirtsInventory