import React from 'react'
import { useState } from 'react';
import {useNavigate, useParams} from 'react-router-dom'

const Product = ({items}) => {

    const navigate=useNavigate()

    const [data,setData]=useState({
        id:"",
        name:"",
        price:""
    })

    const {id}=useParams();
   


    function handleClick(){

       const filterId= items.filter((i)=>{
            return (i.id==id)?i:""
        })
        console.log(filterId);

        if(filterId.length==0){
            alert("No Data available for this ID")
        }
        

        setData({...data,id:filterId[0].id, name:filterId[0].name, price:filterId[0].price})

        
        
    }

  return (
    <div>

        <h1>Product Id : {id}</h1>

        <button onClick={handleClick}>Get Details for {id} : id</button>

        <h3>{data.id} {data.name} {data.price} </h3>

        <button onClick={()=>navigate("/products")}>Back to Cart</button>

    </div>
  )
}

export default Product