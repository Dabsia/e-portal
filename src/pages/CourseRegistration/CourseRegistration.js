import React from 'react'
import AddCourse from '../../components/AddCourse/AddCourse'
import Table from '../../components/Table/Table'
import { useSelector } from 'react-redux'


const CourseRegistration = () => {

  const paid = useSelector(state => state.details.paid)
  const isCourseRegistered = useSelector(state => state.details.registered_course)
    

  return (
    <div>
      {
        paid ? <>
          {!isCourseRegistered && <AddCourse />}
          {isCourseRegistered && <div className='dummyContainer'></div>}
          <Table show = {true} />
        </> : 
          <p className='paidFees'>You havent paid your fees yet</p>

        
      }
      </div>
  )
}

export default CourseRegistration