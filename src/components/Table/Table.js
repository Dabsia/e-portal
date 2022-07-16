import React from 'react'
import './Table.css'
import { useSelector, useDispatch } from 'react-redux'
import { register_courses } from '../../Redux/Actions'

const Table = () => {

    const courseDetails = useSelector(state => state.details.courses)
    const isCourseRegistered = useSelector(state => state.details.registered_course)
    const dispatch = useDispatch()


    return (
      <div className='tableContainer'>
            <table id="customers">
                <thead>
                    <tr>
                        <th>Course Name</th>
                        <th>Course Code</th>
                        <th>Course Unit</th>
                    </tr>
                </thead>
                {
                    courseDetails.map((courseDetail, id) => {
                        return (
                            <tbody key = {id}>
                                <tr>
                                    <td>{courseDetail.courseName}</td>
                                    <td>{courseDetail.courseCode}</td>
                                    <td>{courseDetail.courseUnit}</td>
                                </tr>
                            </tbody>
                        )
                    })
                }
                
            </table>
            <div className='btnContainer'>
                {
                    !isCourseRegistered ? <button className='payBtn' onClick={() => dispatch(register_courses())}>Register Courses</button>
                        : <button className='payBtn'>Courses Registered</button>
                }
                
          </div>
      </div>
  )
}

export default Table