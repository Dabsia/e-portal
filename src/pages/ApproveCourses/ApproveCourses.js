import React from 'react'
import Table from '../../components/Table/Table'
import { useDispatch, useSelector } from 'react-redux'
import { approve_courses } from '../../Redux/Actions'

const ApproveCourses = () => {

  const dispatch = useDispatch()
  const approved = useSelector(state => state.details.approveCourses)
  const courses = useSelector(state => state.details.courses)

  const ApproveStudentCourse = () => {
    if (courses.length === 1) {
      alert('No course Available to Approve')
      return
    }
    dispatch(approve_courses())
    alert('Courses have been approved')
  }

  return (
    <div>
      <Table show = {false} />
      <div className='btnContainer'>
        
        
        {
          !approved && <button className='payBtn' onClick={ApproveStudentCourse}>Approve Courses</button>
        }
        
      </div>
    </div>
    
  )
}

export default ApproveCourses