import React, { useContext } from 'react'
import UserContext from '../Context/UserContext'


function Profile() {
const { user } = useContext(UserContext)

if(!user) return <p>Please log in</p>

  return (
    <div>
      Profile: {user.username}
    </div>
  )
}

export default Profile
