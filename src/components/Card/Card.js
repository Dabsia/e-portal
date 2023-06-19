import React from 'react'
import './Card.css'

const Card = ({ todoItem }) => {
    return (
        <div className='Card' >
            <p>{todoItem.text}</p>
            <p>{todoItem.email}</p>

        </div>
    )
}

export default Card
