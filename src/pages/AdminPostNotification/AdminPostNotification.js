import React, {useState} from 'react'
import DummyNavBar from '../../components/DummyNavBar/DummyNavBar'
import { useDispatch } from 'react-redux'
import {notification} from '../../Redux/Actions'

const AdminPostNotification = () => {

    const [notificationMessage, setNotificationMessage] = useState('')
    const dispatch = useDispatch()

    const sendNotification = (e) => {
        e.preventDefault()
        if (notificationMessage.length === 0) {
            alert('Please type a notification')
            return 
        }    
        dispatch(notification(notificationMessage))
        alert('Notification sent ')
        setNotificationMessage('')
    }

  return (
    <div className='container'>
      <DummyNavBar />
      <section className='right'>
        <form onSubmit={sendNotification} >
              <textarea className='textArea' onChange={e => setNotificationMessage(e.target.value)} placeholder='Post Notification' value = {notificationMessage} />
              <button className='sendMsg'>Post Notification</button>
          </form>
      </section>
    </div>
  )
}

export default AdminPostNotification