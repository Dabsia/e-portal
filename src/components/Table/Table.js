import React from 'react'
import './Table.css'
import { useSelector, useDispatch } from 'react-redux'
import { register_courses } from '../../Redux/Actions'

const Table = ({show}) => {

    const courseDetails = useSelector(state => state.details.courses)
    const approved = useSelector(state => state.details.approveCourses)
    const dispatch = useDispatch()

    const RegisterCourse = () => {
        dispatch(register_courses())
        alert('Courses Registered')
    }


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
                    show && <button className='payBtn' onClick={RegisterCourse}>Register Courses</button>
                        
                }
                
            </div>
            {
                approved && <p style = {{color:'green'}}>Courses Approved</p>
            }
      </div>
  )
}

export default Table