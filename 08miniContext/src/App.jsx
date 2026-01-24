import Login from './components/Login'
import Profile from './components/Profile'

import './App.css'
import UserContextProvider from './Context/UserContextProvider'

function App() {
  

  return (
    <UserContextProvider>
      <p>miniContext</p>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App
