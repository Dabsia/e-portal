import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
// import { storage } from '../../firebase/config';
// import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage'
import './Profile.css'
import Navigation from '../../components/Navigation/Navigation'
// import studentPicture from '../../assets/51153488_460175587849353_261682629244354560_n.jpg'
import { postStudentDetails, getStudentDetails } from '../../Redux/Actions'
import Loader from '../../components/Loader/Loader'

const Profile = () => {
  const paid = useSelector(state => state.details.paid)
  const student = useSelector(state => state.details?.studentUserDetails)

  const isLoading = useSelector(state => state.details.isLoading)

  const studentDetailsId = useSelector(state => state.details.studentDetailsId)



  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getStudentDetails(studentDetailsId))
  }, [dispatch, studentDetailsId])

  const [email, setEmail] = useState('')
  const [fname, setFname] = useState('')
  const [lname, setLname] = useState('')
  const [level, setLevel] = useState(100)
  const [department, setDepartment] = useState('')
  const [mat_no, setMatno] = useState('')

  const userDetails = {
    email, fname, lname, level, department, mat_no
  }

  const showDetails = () => {
    if (!fname || !lname || !email || !mat_no || !department || !level) {
      alert('Please fill in the form correctly')
    }
    else {
      dispatch(postStudentDetails(userDetails))
      dispatch(getStudentDetails(studentDetailsId))
    }

  }

  return (



    <div className='container'>
      <Navigation />
      {
        isLoading ? <Loader /> :
          <section className='right'>
            <div className='profileContainer'>
              <header className='profileHeader'>
                <h2 className='headerText'>Profile</h2>
              </header>
              {/*<div className='imageBox'>
            <div className='imageContainer'>
                <img className='image' src = {imageIsSelected ? selectedImage : studentPicture } alt='student' />
            </div>
            <input
                type="file"
                  onChange={selectImage}
            />
  </div> */}

              <div className='studentDetails'>
                <div className='names'>
                  <div className='nameHolder'>
                    <label htmlFor='fname'>First Name</label>
                    <input className='profileInput' type='text' id='fname' onChange={e => setFname(e.target.value)} value={fname} />
                  </div>
                  <div className='nameHolder'>
                    <label htmlFor='lname'>Last Name</label>
                    <input className='profileInput' type='text' id='lname' onChange={e => setLname(e.target.value)} value={lname} />
                  </div>
                </div>
                <div className='otherDetails'>
                  <div className='otherDetailsHolder'>
                    <label htmlFor='email'>Email</label>
                    <input className='profileInput' type='email' id='email' value={email} onChange={e => setEmail(e.target.value)} />
                  </div>
                  <div className='otherDetailsHolder'>
                    <label htmlFor='mat_no'>Matriculation Number</label>
                    <input className='profileInput' type='text' id='mat_no' value={mat_no} onChange={e => setMatno(e.target.value)} />
                  </div>
                </div>
                <div className='facultyDetails'>
                  <div className='facultyDetailsHolder'>
                    <label htmlFor='level'>Level</label>
                    <input className='profileInput' maxLength={3} type='number' id='level' onChange={e => setLevel(e.target.value)} value={level} />
                  </div>
                  <div className='facultyDetailsHolder'>
                    <label htmlFor='dept'>Department</label>
                    <input className='profileInput' type='text' id='dept' value={department} onChange={e => setDepartment(e.target.value)} />
                  </div>
                </div>
                <div className='otherfacultyDetails'>
                  <div className='otherfacultyDetailsHolder'>
                    <p>Paid School fees : <span style={{ color: paid ? 'green' : 'red', fontWeight: 600 }} >{paid ? 'Yes' : 'No'}</span></p>
                  </div>

                </div>
              </div>
              <button onClick={showDetails} className='profileBtn' >Submit</button>


            </div>
          </section>}
    </div>
  )
}

export default Profile













// const [selectedImage, setSelectedImage] = useState([]);
  // const [imageIsSelected, setImageIsSelected] = useState(false)

  // const selectImage = (e) => {

  //     setSelectedImage(e.target.files[0].name);

  // //     const storageRef = ref(storage, `/files/${selectedImage}`);
  // //     const uploadTask = uploadBytesResumable(storageRef, selectedImage)
  // //     uploadTask.on('state_changed', (snapshot) => {}, (err) => console.log(err),
  // //   () => {
  // //     getDownloadURL(uploadTask.snapshot.ref)
  // //           .then((url) => console.log(url))

  // //   }
  // // )
  //     setImageIsSelected(true)
  //     console.log(selectedImage)
  //     console.log(imageIsSelected)
  //     alert('success')
  // }
