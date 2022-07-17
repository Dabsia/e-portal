import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { register_results } from '../../Redux/Actions'

const ResultTable = ({show}) => {

    const resultDetails = useSelector(state => state.details.results)
    const dispatch = useDispatch()

    const RegisterResult = () => {
        dispatch(register_results())
        alert('Results Registered Already')
    }


    return (
      <div className='tableContainer'>
            <table id="customers">
                <thead>
                    <tr>
                        <th>Course Name</th>
                        <th>Course Code</th>
                        <th>Grade</th>
                    </tr>
                </thead>
                {
                    resultDetails.map((resultDetail, id) => {
                        return (
                            <tbody key = {id}>
                                <tr>
                                    <td>{resultDetail.courseName}</td>
                                    <td>{resultDetail.courseCode}</td>
                                    <td>{resultDetail.coursegrade}</td>
                                </tr>
                            </tbody>
                        )
                    })
                }
                
            </table>
            <div className='btnContainer'>
                {
                    show && <button className='payBtn' onClick={RegisterResult}>Post Results</button>
                        
                }
                
            </div>
            
      </div>
  )
}

export default ResultTable