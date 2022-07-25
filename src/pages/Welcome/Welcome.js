import React from 'react'
import './Welcome.css'
import { useNavigate } from 'react-router-dom'

const Welcome = () => {
    const Navigate = useNavigate()
  return (
    <div className='WelcomeContainer'>
          <div className='Holders'>
              <h1 className='signInOptions'>Welcome</h1>
              <div className='btnHolders'> 
                <button onClick={() => Navigate('/student/signin')} className='btnsRedirect'>Student</button>
                <button onClick={() => Navigate('/lecturer/signin')} className='btnsRedirect'>Lecturer</button>
                <button onClick={() => Navigate('/admin/allrecords')} className='btnsRedirect'>Admin</button>
              </div>
          </div>
    </div>
  )
}

export default Welcome