import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import { add_result } from '../../Redux/Actions'

const AddResult = () => {

    const [courseName, setCourseName] = useState('')
    const [courseCode, setCourseCode] = useState('')
    const [coursegrade, setCourseGrade] = useState('')
    const dispatch = useDispatch()

    const sendResultDetails = () => {

        if (!courseName || !courseCode || !coursegrade) {
            alert('Please enter correct values')
            return 
        }

        const Result = {
            courseName, courseCode, coursegrade
        }
        dispatch(add_result(Result))
        setCourseName('')
        setCourseCode('')
        setCourseGrade('')
    }

    return (
      <div>
      
        <div className='addCourseContainer'>
            <h2>Add Result</h2>
                <div className='selectionsContainer'>
                    <input type='text' className = 'form-control' placeholder='Enter Course Name' value={courseName} onChange={e => setCourseName(e.target.value)} />
                    <input type='text' className = 'form-control' placeholder='Enter Course Code' value={courseCode} onChange={e => setCourseCode(e.target.value)} />
                    <input type='text' className = 'form-control' placeholder='Enter Course Grade' value={coursegrade} onChange = {e => setCourseGrade(e.target.value)} />
                </div>
            </div>
            <div className='btnContainer'>
                <button onClick={sendResultDetails} className='payBtn'>Add Result</button>
          </div>
      </div>
  )
}

export default AddResult