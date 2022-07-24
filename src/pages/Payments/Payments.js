import React from 'react'
import PaystackPop from '@paystack/inline-js'
import { payment_confirmed } from '../../Redux/Actions'
import { useSelector, useDispatch } from 'react-redux'
import './Payments.css'

const Payments = () => {

    const paid = useSelector(state => state.details.paid)
    const student = useSelector(state => state.details.studentUserDetails)
    const dispatch = useDispatch()

    const amountDue =2000
    const amountPaid = 0
    const balance = amountDue - amountPaid
    


    const payWithPayStack = () => {
        

        const payStack = new PaystackPop()
        payStack.newTransaction({
            key: 'pk_test_d6ce738cabd2d7c798c5f2c4a3931cc6efbe7714',
            amount: amountDue * 100,
            email: student.email,
            onSuccess(transaction) {
                let message = `Payment Complete! Reference ${transaction.reference}`
                alert(message)
                dispatch(payment_confirmed())
            },
            onCancel() {
                alert('Do you want to cancel the transaction')
            }
        })
    }
    
    const newPaid = paid ?  amountDue : amountPaid

  return (
      <div>
          <div className='payments__description'>
              <h2>Summary of Finance</h2>
              <h3>Section: 2021/2022</h3>
              <p>Payment Item: SCHOOL FEES</p>
              <p>Amount Due: ₦{amountDue.toLocaleString()}</p>
              <p>Amount Paid: ₦{newPaid.toLocaleString()}</p>
              <p>Hostel Amount Paid: ₦100,000</p>
              <p>Balance: <span style={{ color: paid ? '#121212' : 'red' }}>₦{balance.toLocaleString()}</span></p>
          </div>
          <div className='btnContainer'>
              {
                  !paid ? <button className='payBtn' onClick={payWithPayStack}>Pay Now</button> : 
                      <button className='payBtn'>Payment Completed</button>
              }
          </div>
      </div>
  )
}

export default Payments