import React from 'react'

const UserRole = ({role}) => {
  return (
    <div>
        {role ==="Admin"?<h2>Admin Dashborad</h2>:role==="seller"?<h2>Seller Dashboard</h2>:<h2>User Homepage</h2>}
    </div>
  )
}

export default UserRole