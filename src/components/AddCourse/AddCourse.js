import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import { add_course } from '../../Redux/Actions'
import './AddCourse.css'

const AddCourse = () => {

    const [courseName, setCourseName] = useState('')
    const [courseCode, setCourseCode] = useState('')
    const [courseUnit, setCourseUnit] = useState('')
    const dispatch = useDispatch()

    const sendCourseDetails = () => {

        if (!courseName || !courseCode || !courseUnit) {
            alert('Please enter correct values')
            return 
        }

        const Details = {
                courseName, courseCode, courseUnit
        }
        dispatch(add_course(Details))
        setCourseName('')
        setCourseCode('')
        setCourseUnit('')
    }

    return (
      <div>
      
        <div className='addCourseContainer'>
            <h2>Add Course</h2>
                <div className='selectionsContainer'>
                    <input type='text' className = 'form-control' placeholder='Enter Course Name' value={courseName} onChange={e => setCourseName(e.target.value)} />
                    <input type='text' className = 'form-control' placeholder='Enter Course Code' value={courseCode} onChange={e => setCourseCode(e.target.value)} />
                    <input type='number' className = 'form-control' placeholder='Enter Course Unit' value={ courseUnit} onChange = {e => setCourseUnit(e.target.value)} />
                </div>
            </div>
            <div className='btnContainer'>
                <button onClick={sendCourseDetails} className='payBtn'>Add Course</button>
          </div>
      </div>
  )
}

export default AddCourse