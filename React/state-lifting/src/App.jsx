import ShirtsInventory from "./Components/ShirtsInventory"
import ToastComp from "./Components/ToastComp"

import TotalCost from "./Components/TotalCost"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import UserForm from "./Components/UserForm";
import SearchApp from "./Components/SearchApp";
import { useState } from "react";

function App() {
  
  // const [qty,setQty]=useState(5)
  const [save,setSave]=useState(false)

  return (
    <>

      {/* <h1>Inventory in Parent {qty}</h1>
      <ShirtsInventory quantity={qty} setQuantity={setQty}/>
      <TotalCost qty={qty}/> */}
       
      

      <UserForm save={save} setSave={setSave}/>

      <ToastComp save={save} setSave={setSave}/>

      <ToastContainer />

        {/* <SearchApp/> */}
      


    
    </>
  )
}

export default App
