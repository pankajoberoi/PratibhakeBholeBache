import React, { useEffect } from 'react'
import ServerConnection from './ServerConnection'

const serverUrl='https://localhost:1234'
const ChatRoom = ({roomId}) => {

    useEffect(()=>{
        const connection=ServerConnection(serverUrl,roomId)
        connection.connect()

        return ()=>{
            connection.disconnect()
        }

    },[roomId])

  return (
    <div>
        <h1>Welcome to {roomId} Channel</h1>
    </div>
  )
}

export default ChatRoom