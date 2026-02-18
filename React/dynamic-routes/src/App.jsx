import { useNavigate } from "react-router-dom"

function App() {

  const navigate=useNavigate()

  return (

    <>
      <h1>Welcome to my Website</h1>
      <button onClick={()=>navigate("/products")}>Go to Cart</button>
    </> 
  )
}

export default App
