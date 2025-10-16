import { useState } from 'react'
import './App.css'
import LandingPage from './pages/LandingPage'
import { Routes , Route } from 'react-router-dom'
import LoginForm from './pages/Login'
import SignUp from './pages/SignUp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route exact path='/' element={<LandingPage/>}/>
      <Route exact path='/login' element={<LoginForm/>}/>
      <Route exact path='/signup' element={<SignUp/>}/>

    </Routes>
  )
}

export default App
