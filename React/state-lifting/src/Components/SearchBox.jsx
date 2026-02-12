import React from 'react'

const SearchBox = ({setQuery}) => {
  return (
    <div>

        <input type="text" placeholder='Search User' onChange={(e)=>setQuery(e.target.value)}/>


    </div>
  )
}

export default SearchBox