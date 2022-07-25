import React from 'react'
import './Dashboard.css'
import { useSelector } from 'react-redux'

const Dashboard = () => {

  const notification = useSelector(state => state.details.Notification)
  const adminPostedMessage = useSelector(state => state.details.adminPostedMessage)

  return (
      <div>
          <h1>Notice Board</h1>
      <div className='dashboard'>
        {
          adminPostedMessage ? <p>{notification}</p> : <p>No new notice at the moment</p>
        }
          </div>
      </div>
  )
}

export default Dashboard