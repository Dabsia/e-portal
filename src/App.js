import React from 'react'
import Navigation from './components/Navigation/Navigation'
import { Route, Routes } from 'react-router-dom'
import Payments from './pages/Payments/Payments'
import Complaints from './pages/Complaints/Complaints'
import Hostel from './pages/Hostel/Hostel'
import Profile from './pages/Profile/Profile'
import CourseRegistration from './pages/CourseRegistration/CourseRegistration'
import './App.css'
import Home from './pages/Home.js/Home'

// Lecturer

import ApproveCourses from './pages/ApproveCourses/ApproveCourses'

const App = () => {
  return (
    <div className='container'>
      <Navigation />
      <section className='right'>
        <Routes>
          {/*Student Link section */}
          <Route path='/dashboard' element={<Home />} />
          <Route path='/payments' element={<Payments />} />
          <Route path='/courses' element={<CourseRegistration />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/complains' element={<Complaints />} />
          <Route path='/hostel' element={<Hostel />} />

          {/*Lecturer Link section */}
          <Route path='/lecturer/:id' element={<ApproveCourses />} />


        </Routes>
      </section>
    </div>
  )
}

export default App