import Form from "./Components/Form"
import ThemeButton from "./Components/ThemeButton"
import ThemeProvider from "./Context/ThemeProvider"


function App() {
  

  return (
    <>
   
    <ThemeProvider>
      <ThemeButton/>
      <Form/>
    </ThemeProvider>

    


      
    </>
  )
}

export default App
