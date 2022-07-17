import React from 'react'
import Table from '../../components/Table/Table'
import { useDispatch, useSelector } from 'react-redux'
import { approve_courses } from '../../Redux/Actions'

const ApproveCourses = () => {

  const dispatch = useDispatch()
  const approved = useSelector(state => state.details.approveCourses)


  const ApproveStudentCourse = () => {
    dispatch(approve_courses())
    alert('Courses have been approved')
  }

  return (
    <div>
      <Table />
      <div className='btnContainer'>
        {
          !approved && <button className='payBtn' onClick={ApproveStudentCourse}>Approve Courses</button>
        }
        
      </div>
    </div>
    
  )
}

export default ApproveCourses