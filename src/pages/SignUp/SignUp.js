import React, {useEffect, useState} from 'react'
import './SignUp.css'
import Girl from '../../assets/purpleGirl.jpg'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { ImSpinner } from 'react-icons/im'
import { registerStudent } from '../../Redux/Actions'

const SignUp = () => {

    const isLoading = useSelector(state => state.details.isLoading)
    const isRegSuccessful = useSelector(state => state.details.isRegSuccessful)

    const dispatch = useDispatch()

    const navigate = useNavigate()

    const [fname, setFName] = useState('')
    const [lname, setLName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const userRegDetails = {
        fname, lname, email, password
    }

    const registerUser = (e) => {
        e.preventDefault()
        if (!fname || !lname || !email || password.length === 0) {
        alert('Please fill in the form correctly')
        // return
        }
        else {
            // alert('Success')
            dispatch(registerStudent(userRegDetails))
            
        }
        
        // console.log(userRegDetails)
    }

    useEffect(() => {
        if (isRegSuccessful) {
            navigate('/signin')
        }
    }, [isRegSuccessful, navigate])


    return (
        <div className='signupContainer' >
            <img src={Girl} alt='purple girl ' className='signUpImage' />
            <div className="signUpFormContainer">
                <form onSubmit={registerUser}  className='generalSignUp' >
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
                    {isLoading ? <div className="inputContainer">
                        <button   className='registerBtn' ><ImSpinner/></button>
                    </div>
                    :
                        <div className="inputContainer">
                        <button  className='registerBtn' >Register</button>
                    </div>
                    }
                    <div>
                        <span>Already have an account? <Link className='loginLink' to = '/signin'>Sign In</Link> </span>
                    </div>
                    
                </form>
            </div>
            
        </div>
    )
}

export default SignUp
