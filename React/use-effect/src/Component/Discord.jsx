import React, { useState } from 'react'
import ChatRoom from './ChatRoom'

const Discord = () => {

    const[roomId,setRoomId]=useState("General")
    const[show,setShow]=useState(false)


  return (
    <div>
        <label>
            Choose the chat Room : {' '}
            <select
            value={roomId}
            onChange={(e)=>setRoomId(e.target.value)}>
                <option value="General">General</option>
                <option value="Travel">Travel</option>
                <option value="Games">Games</option>
                <option value="Corporate">Corporate</option>
            </select>
        </label>

        <button onClick={()=> setShow(!show)}>{show?'Close Chat':'Open Chat'}</button>


        {(show)?<ChatRoom roomId={roomId}/>:""}

       {/* H/W State Lifting */}

    </div>
  )
}

export default Discord