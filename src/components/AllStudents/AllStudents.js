import React from 'react'
import StudentList from '../StudentList/StudentList'
import Navigation from '../Navigation/Navigation'

const AllStudents = () => {
    return (
      
      <div className='container'>
      <Navigation />
      <section className='right'>
        <h1>List of all Registered students </h1>
            <StudentList />
      </section>
    </div>
  )
}

export default AllStudents