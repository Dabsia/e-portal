import React from 'react'
import { useSelector, useDispatch} from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { logout } from '../../Redux/Actions'
import './Navigation.css'


const Navigation = () => {

  const student = useSelector(state => state.details.student)
  const auth = useSelector(state => state.details.auth)

  const dispatch = useDispatch()

  const Navigate = useNavigate()

  const LogUserOut = () => {
    Navigate('/')
    dispatch(logout())
  }

  return (

    <nav style={{display: auth ? 'flex' : 'none'}}>
          <h4><Link className='logo' to='/dashboard'>e-portal</Link></h4>
          
          <ul style = {{height: student ? '60%' : '200px'}}>
        {student ? <>
          <Link className='link' to='/dashboard'><li><i className="ri-dashboard-fill"></i>Dashboard</li></Link>
              <Link className='link' to='/courses'><li><i className="ri-book-open-line"></i>Course Registration</li></Link>
              <Link className='link' to='/profile'><li><i className="ri-user-line"></i>Profile</li></Link>
          <Link className='link' to='/payments'><li><i className="ri-bank-card-line"></i>Payments</li></Link>
          <Link className='link' to='/result'><li><i className="ri-bank-card-line"></i>Result</li></Link>
              <Link className='link' to='/hostel'><li><i className="ri-hotel-line"></i>Hostel</li></Link>
          <Link className='link' to='/complains'><li><i className="ri-chat-2-line"></i>Complaints</li></Link>
        </> : <>
              <Link className='link' to='/lecturer/approve-course'><li><i className="ri-chat-2-line"></i>Approve Courses</li></Link>
              <Link className='link' to='/lecturer/students'><li><i className="ri-chat-2-line"></i>Students</li></Link>
              <Link className='link' to='/lecturer/upload-result'><li><i className="ri-chat-2-line"></i>Upload Results</li></Link>
            </>  
        }
          </ul>

          <h4 onClick={LogUserOut} className='logoutBtn'><i className="ri-logout-box-line"></i>Logout</h4>
    </nav>
  )
}

export default Navigation