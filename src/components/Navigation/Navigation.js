import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { logout } from '../../Redux/Actions'
import './Navigation.css'


const Navigation = () => {

  const isSignedIn = useSelector(state => state.details.isSignedIn)
  const auth = useSelector(state => state.details.auth)

  const dispatch = useDispatch()

  const Navigate = useNavigate()

  const LogUserOut = () => {
    Navigate('/')
    dispatch(logout())
  }

  return (
    <nav>
      <h4><Link className='logo' to='/dashboard'>e-portal</Link></h4>

      <ul style={{ height: isSignedIn ? '60%' : '200px' }}>
        <>
          <Link className='link' to='/dashboard'><li><i className="ri-dashboard-fill"></i>Dashboard</li></Link>
          <Link className='link' to='/courses'><li><i className="ri-book-open-line"></i>Course Registration</li></Link>
          <Link className='link' to='/profile'><li><i className="ri-user-line"></i>Profile</li></Link>
          <Link className='link' to='/payments'><li><i className="ri-bank-card-line"></i>Payments</li></Link>
          <Link className='link' to='/result'><li><i className="ri-bank-card-line"></i>Result</li></Link>
          <Link className='link' to='/hostel'><li><i className="ri-hotel-line"></i>Hostel</li></Link>
          <Link className='link' to='/complains'><li><i className="ri-chat-2-line"></i>Complaints</li></Link>
        </>

      </ul>

      <h4 onClick={LogUserOut} className='logoutBtn'><i className="ri-logout-box-line"></i>Logout</h4>
    </nav>
  )
}

export default Navigation