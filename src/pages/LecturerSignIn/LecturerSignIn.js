import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { lecturerLogin } from '../../Redux/Actions'


const LecturerSignIn = () => {
  const dispatch = useDispatch()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [isLoading, setIsLoading] = useState(false)

    const Navigate = useNavigate()


    const API_KEY = "AIzaSyDOeMC8aU6VKdRIq8dQ8HFOcGuVeSUG7JA" 

    const SubMitForm = (e) => {
        e.preventDefault()
        
        if ( !email || password.length === 0) { 
            alert('Please fill in the form correctly')
            return  
      } 
      
        
        setIsLoading(true)
    // Submitting the user input to firebase 
    fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`, {
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
          console.log('Login Successful')
          Navigate('/dashboard')
          dispatch(lecturerLogin())
        return res.json()
      }
      // Show Auth Message if failed
      else{
        return res.json().then(data => {
          console.log(data)
          let errorMessage = 'Authentication Failed'
          if (data && data.error && data.error.message) {
            errorMessage = data.error.message
            }
            alert(errorMessage)
          throw new Error(errorMessage);
        });
      }
    })
    }

  return (
    <div className='StudentForm'>
        <form className='signInForm' onSubmit={SubMitForm}> 
              <div className='signInFormContainer'>
                  <input className='signInFormInput' type='email' placeholder='Email' onChange={(e) => setEmail(e.target.value)} value={ email} />
                <input className='signInFormInput' type = 'password' placeholder='password' onChange={(e) => setPassword(e.target.value)} value = {password} />
                <button className='signInBtn'>{ isLoading ? 'Loading...' : 'Log In'}</button>
                <p>Don't have an account? <Link to = '/lecturer/signup'>Create Account</Link></p>
              </div>
        </form>
      </div>
  )
}



export default LecturerSignIn