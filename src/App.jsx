import { useState, useEffect } from 'react'
//Routes
import { BrowserRouter, Routes, Route } from 'react-router-dom'

//App Styles
import './App.css'

//Components
import Header from './components/Header/Header'

//Pages
import Home from './pages/Home/Home'
import Checkout from './pages/Checkout/Checkout'
import Login from './pages/Login/Login'

//Custom Hooks
import { useStateValue } from './main'

//Firebase Auth
import { auth } from './Firebase/Firebase'

function App() {
  const [{ user }, dispatch] = useStateValue();
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        console.log(authUser)
        dispatch({
          type: 'SET_USER',
          user: authUser
        })


      } else {
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
    return () => {
      unsubscribe()

    }

  }, [])
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route path='/checkout' element={<><Header /><Checkout /></>} />
          <Route path='/login' element={<Login />} />
          <Route path='/' element={<><Header /><Home /></>} />

        </Routes>
      </div>
    </BrowserRouter>

  )
}

export default App
