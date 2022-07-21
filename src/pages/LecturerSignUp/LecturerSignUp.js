import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { create_new_lecturer } from '../../Redux/Actions'
import { useDispatch } from 'react-redux'


const LecturerSignUp = () => {
  const dispatch = useDispatch()

    const API_KEY = "AIzaSyDOeMC8aU6VKdRIq8dQ8HFOcGuVeSUG7JA" 

    const [fname, setFname] = useState('')
    const [lname, setLname] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [isLoading, setIsLoading] = useState(false)
  
    const Navigate = useNavigate()

    const SubMitForm = (e) => {
        e.preventDefault()
        if (!fname || !lname || !email || password.length === 0) { 
            alert('Please fill in the form correctly')
            return  
      } 
      const user = {
        email, fname, lname
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

        fetch('https://e-portal-fc6d8-default-rtdb.firebaseio.com/lecturers.json', {
          method : 'POST',
          body: JSON.stringify(user),
          headers: {
            'Content-Type' : 'application/json'
          }
        }).then(res => res.json()).then(data => console.log(data))


        dispatch(create_new_lecturer(user))
        Navigate('/lecturer/signin')
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
                <input className='signInFormInput' type = 'email' placeholder='email' onChange={e => setEmail(e.target.value)} value={ email} />
                <input className='signInFormInput' type = 'password' placeholder='password' onChange={e => setPassword(e.target.value)} value={ password}  />
                <button className='signInBtn'>{ !isLoading ?  'Create Account' : 'Loading...'}</button>
                <p>Already have an account? <Link to = '/lecturer/signin'>Sign In</Link></p>
              </div>
        </form>
      </div>
  )
}

export default LecturerSignUp