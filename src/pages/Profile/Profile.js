import React from 'react'
import { useSelector } from 'react-redux'
// import { storage } from '../../firebase/config';
// import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage'
import './Profile.css'
// import studentPicture from '../../assets/51153488_460175587849353_261682629244354560_n.jpg'


const Profile = () => {
    const paid = useSelector(state => state.details.paid)
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

  return (
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
                    <input className='profileInput' type = 'text' id = 'fname'  readOnly value = 'dabo' />
                  </div>
                  <div className='nameHolder'>
                    <label htmlFor='lname'>Last Name</label>
                    <input className='profileInput' type = 'text' id = 'lname'  readOnly value = 'johnson' />
                  </div>
              </div>
              <div className='otherDetails'>
                  <div className='otherDetailsHolder'>
                    <label htmlFor='email'>Email</label>
                    <input className='profileInput' type = 'email' id = 'email'  readOnly value = 'dabojohnson98@gmail.com' />
                  </div>
                  <div className='otherDetailsHolder'>
                    <label htmlFor='mat_no'>Matriculation Number</label>
                    <input className='profileInput' type = 'text' id = 'mat_no'  readOnly value = 'scn/csc/180092'/>
                  </div>
              </div>
              <div className='facultyDetails'>
                  <div className='facultyDetailsHolder'>
                    <label htmlFor='level'>Level</label>
                    <input className='profileInput' type = 'number' id = 'level' readOnly value = '400' />
                  </div>
                  <div className='facultyDetailsHolder'>
                    <label htmlFor='dept'>Department</label>
                    <input className='profileInput' type = 'text' id = 'dept' readOnly value = 'computer Science' />
                  </div>
              </div>
              <div className='otherfacultyDetails'>
                  <div className='otherfacultyDetailsHolder'>
                    <p>Paid School fees : <span style={{ color: paid ? 'green' : 'red', fontWeight: 600 }} >{paid? 'Yes' : 'No'}</span></p>
                  </div>
                  <div className='otherfacultyDetailsHolder'>
                    <p>Student Type : <span >Full Time</span></p>
                  </div>
              </div>
          </div>
      </div>
  )
}

export default Profile