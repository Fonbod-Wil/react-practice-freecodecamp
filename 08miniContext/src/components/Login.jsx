import React from 'react'
import { useState, } from 'react'
import UserContext from '../Context/UserContext'
import { useContext } from 'react'


function Login() {
//login form has two fields username and password
const [username, setUsername] = useState('')
const [password, setPassword] = useState('')


const { setUser} = useContext(UserContext)
const handleSubmit = (e) => {
// prevent the page from refreshing.
    e.preventDefault()
    // check if username and password are empty
    setUser({username, password})
}


  return (
    <div>
      <h2>Login</h2>
      <input
       type="text" 
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder='username'
      />
      {" "}
      <input
       type="password" 
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder='password'
      />
      {" "}
      <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login
