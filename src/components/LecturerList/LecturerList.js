import React, {useState, useEffect} from 'react'

const LecturerList = () => {

    const [lecturersLists, setLecturersList] = useState([])

    useEffect(() => {
        fetch('https://e-portal-fc6d8-default-rtdb.firebaseio.com/lecturers.json')
            .then(res => res.json())
            .then(resData => {
                const loadedLecturers = []
                for (const key in resData) {
                    loadedLecturers.push({
                        id: key,
                        fname: resData[key].fname,
                        lname: resData[key].lname,
                        email: resData[key].email
                    })
                };
                setLecturersList(loadedLecturers)
                
        })
    }, [])

  return (
      <div className='tableContainer'>
            <table id="customers">
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                {
                    lecturersLists.map((lecturersList, id) => {
                        return (
                            <tbody key = {id}>
                                <tr>
                                    <td>{lecturersList.fname}</td>
                                    <td>{lecturersList.lname}</td>
                                    <td>{lecturersList.email}</td>
                                </tr>
                            </tbody>
                        )
                    })
                }
                
            </table>
            
      </div>
  )
}

export default LecturerList