import React, {useState} from 'react'
import './StudentSignUp.css'
import { Link, useNavigate } from 'react-router-dom'
import { create_new_user } from '../../Redux/Actions'
import { useDispatch } from 'react-redux'

const StudentSignUp = () => {

    const dispatch = useDispatch()

    const API_KEY = "AIzaSyDOeMC8aU6VKdRIq8dQ8HFOcGuVeSUG7JA" 

    const [fname, setFname] = useState('')
    const [lname, setLname] = useState('')
    const [mat_no, setMat_no] = useState('')
    const [level, setLevel] = useState('')
    const [department, setDepartment] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [fullStudent, setFullStudent] = useState('')

    const [isLoading, setIsLoading] = useState(false)
  
    const Navigate = useNavigate()

    const SubMitForm = (e) => {
        e.preventDefault()
        if (!fname || !lname || !mat_no || !level || !department || !fullStudent || !email || password.length === 0) { 
            alert('Please fill in the form correctly')
            return  
      } 
      const user = {
        email, fname, lname, department, level, fullStudent, mat_no
      }
      
      setIsLoading(true)
    fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`, {
      method: 'POST',
      body: JSON.stringify({
        email: email,
        password: password,
        returnSecureToken: true
      }),
      headers: {
        'Content-Type' : 'application/json'
      }
    }).then(res => {
      setIsLoading(false)
      if (res.ok){
        // Sending the user datails to firebase

        fetch('https://e-portal-fc6d8-default-rtdb.firebaseio.com/students.json', {
          method : 'POST',
          body: JSON.stringify(user),
          headers: {
            'Content-Type' : 'application/json'
          }
        }).then(res => res.json()).then(data => console.log(data))


        dispatch(create_new_user(user))
        Navigate('/student/signin')
      }
      else{
        return res.json().then(data => {
          let errorMessage = 'Authentication Failed'
          if (data && data.error && data.error.message) {
            errorMessage = data.error.message
          }
          alert(errorMessage)
        });
      }
    })

    }



  return (
    <div className='StudentForm'>
        <form className='signUpForm' onSubmit={SubMitForm}> 
              <div className='signInFormContainer'>
                  <input className='signInFormInput' type='text' placeholder='First Name' onChange={e => setFname(e.target.value)} value={ fname} />
                <input className='signInFormInput' type = 'text' placeholder='Last Name' onChange={e => setLname(e.target.value)} value={ lname} />
                <input className='signInFormInput' type = 'text' placeholder='Mat_No' onChange={e => setMat_no(e.target.value)} value={ mat_no} />
                <input className='signInFormInput' type = 'text' placeholder='Level' onChange={e => setLevel(e.target.value)} value={ level} />
                <input className='signInFormInput' type='text' placeholder='Department' onChange={e => setDepartment(e.target.value)} value={ department} />
                <input className='signInFormInput' type = 'email' placeholder='email' onChange={e => setEmail(e.target.value)} value={ email} />
                <input className='signInFormInput' type = 'password' placeholder='password' onChange={e => setPassword(e.target.value)} value={ password}  />
                  <select value = {fullStudent} onChange = {e => setFullStudent(e.target.value)} className='signInFormInput'>
                      <option value = 'partTime'>Part-time</option>
                      <option value = 'fullTime' >Full-time</option>
                  </select>
                <button className='signInBtn'>{ !isLoading ?  'Create Account' : 'Loading...'}</button>
                <p>Already have an account? <Link to = '/student/signin'>Sign In</Link></p>
              </div>
        </form>
      </div>
  )
}

export default StudentSignUp