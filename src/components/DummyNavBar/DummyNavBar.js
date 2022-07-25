import React from 'react'
import { useDispatch} from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { logout } from '../../Redux/Actions'
import '../Navigation/Navigation.css'


const DummyNavBar = () => {

  

  const dispatch = useDispatch()

  const Navigate = useNavigate()

  const LogUserOut = () => {
    Navigate('/')
    dispatch(logout())
  }

  return (
      <nav >
            <h4><Link className='logo' to='/dashboard'>e-portal</Link></h4>
            
            <ul>
                <Link className='link' to='/admin/allrecords'><li><i className="ri-chat-2-line"></i>All Records</li></Link>
                <Link className='link' to='/admin/messages'><li><i className="ri-chat-2-line"></i>Received Complaints</li></Link>
                <Link className='link' to='/admin/notification'><li><i className="ri-chat-2-line"></i>Post Notification</li></Link>
            </ul>

            <h4 onClick={LogUserOut} className='logoutBtn'><i className="ri-logout-box-line"></i>Logout</h4>
      </nav>
  )
}

export default DummyNavBar