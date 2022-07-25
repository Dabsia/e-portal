import React from 'react'
import DummyNavBar from '../../components/DummyNavBar/DummyNavBar'
import { useSelector } from 'react-redux'
import './AdminMessage.css'

const AdminMessages = () => {

    const messages = useSelector(state => state.details.complaint)
    

  return (
    <div className='container'>
      <DummyNavBar />
          <section className='right'>
              {
                  messages.map(message => {
                      return <p className='message' key={message.id}>{ message.message}</p>
                  })
              }
      </section>
    </div>
  )
}

export default AdminMessages