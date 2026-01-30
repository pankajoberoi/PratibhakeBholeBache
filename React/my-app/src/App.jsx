import Card from "./components/Card"
import Sample from "./components/Sample"
// import Intro from "./components/Intro"




function App() {


  let team=[
    {
      name:"Virat Kohli",
      img:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Virat_Kohli_in_PMO_New_Delhi.jpg/500px-Virat_Kohli_in_PMO_New_Delhi.jpg"
    },
    {
      name:"Rohit Sharma",
      img:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Prime_Minister_Of_Bharat_Shri_Narendra_Damodardas_Modi_with_Shri_Rohit_Gurunath_Sharma_%28Cropped%29.jpg/500px-Prime_Minister_Of_Bharat_Shri_Narendra_Damodardas_Modi_with_Shri_Rohit_Gurunath_Sharma_%28Cropped%29.jpg"
    }

  ]

  
  return (
    <div>
        {
          team.map((player)=>(
            <Card name={player.name} img={player.img}/>
          ))
        }
        
    </div>
  )
}

export default App
