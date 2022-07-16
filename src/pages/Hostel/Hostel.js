import React, {useState} from 'react'
import './Hostel.css'
import { useDispatch, useSelector } from 'react-redux'
import { save_hostel } from '../../Redux/Actions'


const Hostel = () => {

    const [hostelName, setHostel] = useState('')
    const [hostelFlat, setHostelFlat] = useState('')
    const [hostelRoomNumber, setHostelRoomNumber] = useState('')
    
    const dispatch = useDispatch()

    // const API_KEY = "AIzaSyDOeMC8aU6VKdRIq8dQ8HFOcGuVeSUG7JA"
    // const firebaseStorageUrl = 'https://e-portal-fc6d8-default-rtdb.firebaseio.com/'

    const hostel = useSelector(state => state.details.hostel)
    const paid = useSelector(state => state.details.paid)

    const hostelDetails = {
        hostelName, hostelFlat, hostelRoomNumber
    }

    const handleHostelSubmit = (hostel) => {
        if (!hostelName || !hostelFlat || !hostelRoomNumber) {
            alert('Please enter correct values')
            return 
        }
        dispatch(save_hostel(hostelDetails))
        alert('Hostel Submitted')
    }

    return (
      <div>
            {
                paid ?
                    
            <><div className='hostel__desc'>
                <h2>Hostel Details</h2>
                <p>Hostel Name: { hostel.hostelName} </p>
                <p>Hostel Flat: { hostel.hostelFlat} </p>
                <p>Room number:  { hostel.hostelRoomNumber} </p>
                <div className='selectionsContainer'>
                    <select className="form-control" value = {hostelName} onChange = {e => setHostel(e.target.value)}>
                        <option disabled>Select Hostel</option>
                        <option name = 'abv'>Above Only</option>
                        <option name = 'bog' >Balm of Gilead</option>
                        <option name = 'grc' >Grace</option>
                        <option name = 'spl' >Splendour</option>
                        <option name='chm' >Champions</option>
                        <option name = 'hpe' >Hope</option>
                        <option name = 'pce' >Peace</option>
                        <option name = 'crt' >Court</option>
                </select>
                
                <input type='text' className = 'form-control' placeholder='Enter hostel flat' value={hostelFlat} onChange={e => setHostelFlat(e.target.value)} />
                <input type='text' className = 'form-control' placeholder='Enter room number' value={ hostelRoomNumber} onChange = {e => setHostelRoomNumber(e.target.value)} />
            </div>
            </div>
            <div className='btnContainer'>
                <button onClick={handleHostelSubmit} className='payBtn'>Save Details</button>
                        </div>
        </>
                     :
                    <p className='paidFees'>You havent paid your fees yet</p>
      }
        
      </div>
  )
}

export default Hostel