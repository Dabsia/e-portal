import React, {useState} from 'react'
import './SignUp.css'
import Girl from '../../assets/purpleGirl.jpg'

const SignUp = () => {


    const [fname, setFName] = useState('')
    const [lname, setLName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const userRegDetails = {
        fname, lname, email, password
    }

    const registerUser = (e) => {
        e.preventDefault()
        console.log(userRegDetails)
    }

    return (
        <div className='signupContainer' >
            <img src={Girl} alt='purple girl ' className='signUpImage' />
            <div className="signUpFormContainer">
                <form onSubmit={registerUser} className='generalSignUp' >
                    <div className="inputContainer">
                        <label htmlFor="fname">First Name</label>
                        <input value={fname} placeholder='John' type="text" id="fname" onChange={e => setFName(e.target.value)} />
                    </div>
                    <div className="inputContainer">
                        <label htmlFor="lname">Last Name</label>
                        <input value={lname} placeholder='Doe' type="text" id="lname" onChange={e => setLName(e.target.value)} />
                    </div>
                    <div className="inputContainer">
                        <label htmlFor="email">Email</label>
                        <input value={email} placeholder='johndoe@gmail.com' type="email" id="email" onChange={e => setEmail(e.target.value)} />
                    </div>
                    <div className="inputContainer">
                        <label htmlFor="password">Password</label>
                        <input value={password} placeholder='...............' type="password" id="password" onChange={e => setPassword
                        (e.target.value)} />
                    </div>
                    <div className="inputContainer">
                        <button className='registerBtn' >Register</button>
                    </div>
                    
                </form>
            </div>
            
        </div>
    )
}

export default SignUp
