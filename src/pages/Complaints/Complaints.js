import React, {useState} from 'react'
import './Complaints.css'
import { complaint_message } from '../../Redux/Actions'
import { useDispatch } from 'react-redux'

const Complaints = () => {

    const [complaint, setComplaint] = useState('')
    const dispatch = useDispatch()

    const message = {
        id: Math.random().toString(36).slice(2),
        text: complaint
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (complaint.length === 0) {
            alert('Please type a message first')
            return 
        }
        dispatch(complaint_message(message))
        alert('Your message has been sent.')
        setComplaint('')
    }

  return (
      <div className='messageHolder'>
          <form onSubmit={handleSubmit}>
              <textarea className='textArea' onChange={e => setComplaint(e.target.value)} placeholder='Make a complain...' value = {complaint} />
              <button className='sendMsg'>Send Complaint</button>
          </form>
      </div>
  )
}

export default Complaints