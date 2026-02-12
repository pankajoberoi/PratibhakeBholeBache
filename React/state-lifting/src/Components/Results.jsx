import React from 'react'

const Results = ({query}) => {


    const users=["Aman","Riya","Rohit","Neha","Pankaj","Priya"]

    const filteredData=users.filter((u)=>u.toLowerCase().includes(query.toLowerCase()))


  return (
    <div>
      <ul>
      {filteredData.map((name)=>(
        <li key={name}>{name}</li>
      ))}
      </ul>
    </div>
  )
}

export default Results