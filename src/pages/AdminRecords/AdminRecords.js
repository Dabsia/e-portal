import React from 'react'
import StudentList from '../../components/StudentList/StudentList'
import LecturerList from '../../components/LecturerList/LecturerList'
import './AdminRecords.css'
import DummyNavBar from '../../components/DummyNavBar/DummyNavBar'

const AdminRecords = () => {
  return (

    <div className='container'>
      <DummyNavBar />
      <section className='right'>
         <h1>All Students</h1>
        <StudentList />
        <h1>Lecturers</h1>
        <LecturerList />
      </section>
    </div>
  )
}

export default AdminRecords