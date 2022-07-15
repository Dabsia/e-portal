import React from 'react'
import Navigation from './components/Navigation/Navigation'
import { Route, Routes } from 'react-router-dom'
import Payments from './pages/Payments/Payments'
import Complaints from './pages/Complaints/Complaints'
import Hostel from './pages/Hostel/Hostel'
import './App.css'
import Home from './pages/Home.js/Home'

const App = () => {
  return (
    <div className='container'>
      <Navigation />
      <section className='right'>
        <Routes>
          <Route path='/dashboard' element={<Home />} />
          <Route path='/payments' element={<Payments />} />
          <Route path='/complains' element={<Complaints />} />
          <Route path = '/hostel' element = {<Hostel />} />
        </Routes>
      </section>
    </div>
  )
}

export default App