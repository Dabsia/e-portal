import React from 'react'
import StudentList from '../StudentList/StudentList'
import LecturerList from '../LecturerList/LecturerList'

const AllStudents = () => {
    return (
      <div>  
        <h1>List of all Registered students </h1>
            <StudentList />
            <LecturerList />
      </div>
  )
}

export default AllStudents