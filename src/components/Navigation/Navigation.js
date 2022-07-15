import React from 'react'
import { Link } from 'react-router-dom'
import './Navigation.css'


const Navigation = () => {
  return (
    <nav>
          <h4><Link className='logo' to='/'>e-portal</Link></h4>
          
          <ul>
              <li><Link className='link' to='/dashboard'><i className="ri-dashboard-fill"></i>Dashboard</Link></li>
              <li><Link className='link' to='/'><i className="ri-book-open-line"></i>Course Registration</Link></li>
              <li><Link className='link' to='/'><i className="ri-user-line"></i>Profile</Link></li>
              <li><Link className='link' to='/payments'><i className="ri-bank-card-line"></i>Payments</Link></li>
              <li><Link className='link' to='/hostel'><i className="ri-hotel-line"></i>Hostel</Link></li>
              <li><Link className='link' to='/complains'><i className="ri-chat-2-line"></i>Complaints</Link></li>
              <li><Link className='link' to='/'><i className="ri-settings-2-line"></i>Settings</Link></li>
              <button>Log Out</button>
          </ul>
    </nav>
  )
}

export default Navigation