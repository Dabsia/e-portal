import React from 'react'
import Card from '../Card/Card'

const TodoItems = ({ todoItems }) => {


    return (
        <div>
            {todoItems.map((todoItem, id) => {
                return <Card key={id} todoItem={todoItem} />
            })}
        </div>
    )
}

export default TodoItems


