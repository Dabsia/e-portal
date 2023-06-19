import React, { useState } from 'react'
import TodoItems from '../../components/TodoItems/TodoItems'



const Learning = () => {

    const [text, setText] = useState('')
    const [email, setEmail] = useState('Johnson')

    const [todoItems, setTodoItems] = useState([])


    const userData = {
        text, email
    }

    const addItem = (e) => {
        e.preventDefault()
        // setTodoItems(prev => [...prev, text])
        setTodoItems(prev => [...prev, userData])
        setText('')

        console.log(todoItems)
    }




    return (
        <div>
            <h1>My Awesome Todo List Application</h1>
            <form onSubmit={addItem} >
                <input placeholder='Please enter an item' type='text' value={text} onChange={e => setText(e.target.value)} />
                <button>Add</button>
            </form>
            <TodoItems todoItems={todoItems} />
        </div>
    )
}


// Input
// Location to store the inputs



// class Learning extends Component {
//     constructor() {
//         super()
//         this.state = {
//             text: '',
//             todoItems: []
//         }
//     }

//     render() {
//         return (
//             <form>
//             </form>
//         )
//     }
// }



export default Learning
