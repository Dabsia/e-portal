import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Payments from './pages/Payments/Payments'
import Complaints from './pages/Complaints/Complaints'
import Hostel from './pages/Hostel/Hostel'
import Profile from './pages/Profile/Profile'
import CourseRegistration from './pages/CourseRegistration/CourseRegistration'
import './App.css'
import Home from './pages/Home.js/Home'
import Result from './pages/Result/Result'
import Welcome from './pages/Welcome/Welcome'

// Lecturer

import ApproveCourses from './pages/ApproveCourses/ApproveCourses'
import UploadResult from './pages/UploadResult/UploadResult'

import AllStudents from './components/AllStudents/AllStudents'

// Admin
import AdminRecords from './pages/AdminRecords/AdminRecords'
import AdminMessages from './pages/AdminMessages/AdminMessages'
import AdminPostNotification from './pages/AdminPostNotification/AdminPostNotification'
import SignUp from './pages/SignUp/SignUp'
import Learning from './pages/Learnin/Learning'
import SignIn from './pages/SignIn/SignIn'


const App = () => {



  return (
    <div >

      <Routes>

        <Route path='/' element={<Welcome />} />
        {/*General signup page*/}
        <Route path='/signup' element={<SignUp />} />
        <Route path='/signin' element={<SignIn />} />

        {/*Student Link section */}
        <Route path='/dashboard' element={<Home />} />
        <Route path='/payments' element={<Payments />} />
        <Route path='/courses' element={<CourseRegistration />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/complains' element={<Complaints />} />
        <Route path='/hostel' element={<Hostel />} />
        <Route path='/result' element={<Result />} />


        // learning
        <Route path='/learning' element={<Learning />} />


        {/*Lecturer Link section */}
        <Route path='/lecturer/approve-course' element={<ApproveCourses />} />
        <Route path='/lecturer/upload-result' element={<UploadResult />} />

        <Route path='/lecturer/studentlist' element={<AllStudents />} />


        {/*Admin */}
        <Route path='/admin/allrecords' element={<AdminRecords />} />
        <Route path='/admin/messages' element={<AdminMessages />} />
        <Route path='/admin/notification' element={<AdminPostNotification />} />


        {/*Learning*/}
        <Route path='learning' element={<Learning />} />

      </Routes>
    </div>
  )
}

export default App