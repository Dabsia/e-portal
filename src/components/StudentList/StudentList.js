import React, {useState, useEffect} from 'react'

const StudentList = () => {

    const [studentsLists, setStudentsList] = useState([])

    useEffect(() => {
        fetch('https://e-portal-fc6d8-default-rtdb.firebaseio.com/students.json')
            .then(res => res.json())
            .then(resData => {
                const loadedStudents = []
                for (const key in resData) {
                    loadedStudents.push({
                        id: key,
                        fname: resData[key].fname,
                        lname: resData[key].lname,
                        mat_no: resData[key].mat_no,
                        fullStudent: resData[key].fullStudent,
                        email: resData[key].email,
                        department: resData[key].department,
                        level: resData[key].level
                        
                    })
                };
                setStudentsList(loadedStudents)
                
        })
    }, [])

  return (
      <div className='tableContainer'>
            <table id="customers">
                <thead>
                    <tr>
                        <th>First Name</th>
                      <th>Last Name</th>
                      <th>Matric Number</th>
                      <th>Email</th>
                      <th>Department</th>
                      <th>level</th>
                      <th>Student Type</th>

                    </tr>
                </thead>
                {
                    studentsLists.map((studentsList, id) => {
                        return (
                            <tbody key = {id}>
                                <tr>
                                    <td>{studentsList.fname}</td>
                                    <td>{studentsList.lname}</td>
                                    <td>{studentsList.mat_no}</td>
                                    <td>{studentsList.email}</td>
                                    <td>{studentsList.department}</td>
                                    <td>{studentsList.level}</td>
                                    <td>{studentsList.fullStudent}</td>
                                </tr>
                            </tbody>
                        )
                    })
                }
                
            </table>
            
      </div>
  )
}

export default StudentList