import { useState } from 'react'
import './App.css'
import LandingPage from './pages/LandingPage'
import { Routes , Route } from 'react-router-dom'
import LoginForm from './pages/Login'
import SignUp from './pages/SignUp'
import PaymentPage from './components/PaymentPage'
import SuccessPage from './pages/Success'
import OrderSummaryPage from './pages/OrderSummaryPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route exact path='/' element={<LandingPage/>}/>
      <Route exact path='/login' element={<LoginForm/>}/>
      <Route exact path='/signup' element={<SignUp/>}/>
      <Route exact path='/payment' element={<PaymentPage/>}/>
      <Route exact path='/success' element={<SuccessPage/>}/>
      <Route exact path='/order-summary' element={<OrderSummaryPage/>}/>

    </Routes>
  )
}

export default App
