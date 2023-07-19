import React, { useState } from 'react'
import Details from '../Details/Details'

const Learning = () => {

    const [input, setInput] = useState('')


    return (
        <div>
            <input value={input} onChange={e => setInput(e.target.value)} />

            <button>Save</button>
            <Details username={input} />
        </div>
    )
}

export default Learning
