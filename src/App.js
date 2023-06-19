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
import StudentSignIn from './pages/StudentSignIn/StudentSignIn'
import StudentSignUp from './pages/StudentSignUp/StudentSignUp'

// Lecturer

import ApproveCourses from './pages/ApproveCourses/ApproveCourses'
import UploadResult from './pages/UploadResult/UploadResult'
import LecturerSignIn from './pages/LecturerSignIn/LecturerSignIn'
import LecturerSignUp from './pages/LecturerSignUp/LecturerSignUp'
import AllStudents from './components/AllStudents/AllStudents'

// Admin
import AdminRecords from './pages/AdminRecords/AdminRecords'
import AdminMessages from './pages/AdminMessages/AdminMessages'
import AdminPostNotification from './pages/AdminPostNotification/AdminPostNotification'
import SignUp from './pages/SignUp/SignUp'
import Learning from './pages/Learnin/Learning'

const App = () => {



  return (
    <div >

      <Routes>

        <Route path='/' element={<Welcome />} />
        {/*General signup page*/}
        <Route path='/signup' element={<SignUp />} />

        {/*Student Link section */}
        <Route path='/student/signin' element={<StudentSignIn />} />
        <Route path='/student/signup' element={<StudentSignUp />} />
        <Route path='/dashboard' element={<Home />} />
        <Route path='/payments' element={<Payments />} />
        <Route path='/courses' element={<CourseRegistration />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/complains' element={<Complaints />} />
        <Route path='/hostel' element={<Hostel />} />
        <Route path='/result' element={<Result />} />

        {/*Lecturer Link section */}
        <Route path='/lecturer/approve-course' element={<ApproveCourses />} />
        <Route path='/lecturer/upload-result' element={<UploadResult />} />
        <Route path='/lecturer/signin' element={<LecturerSignIn />} />
        <Route path='/lecturer/studentlist' element={<AllStudents />} />
        <Route path='/lecturer/signup' element={<LecturerSignUp />} />

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