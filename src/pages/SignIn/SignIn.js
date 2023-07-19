import React, { useState, useEffect } from 'react'
import Girl from '../../assets/purpleGirl.jpg'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { loginStudent } from '../../Redux/Actions'
import { ImSpinner } from 'react-icons/im'

const SignIn = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const isLoading = useSelector(state => state.details.isLoading)
    const isSignedIn = useSelector(state => state.details.isSignedIn)

    const dispatch = useDispatch()

    const navigate = useNavigate()


    const userRegDetails = {
        email, password
    }


    const loginUser = (e) => {
        e.preventDefault()
        if (!email || password.length === 0) {
            alert('Please fill in the form correctly')
            // return
        }
        else {
            dispatch(loginStudent(userRegDetails))

        }
    }


    useEffect(() => {
        if (isSignedIn) {
            navigate('/dashboard')
        }
    }, [isSignedIn, navigate])

    return (
        <div className='signupContainer' >
            <img src={Girl} alt='purple girl ' className='signUpImage' />
            <div className="signUpFormContainer">
                <form onSubmit={loginUser} className='generalSignUp' >
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
                        <button className='registerBtn' ><ImSpinner /></button>
                    </div>
                        :
                        <div className="inputContainer">
                            <button className='registerBtn' >Sign In</button>
                        </div>
                    }
                    <div>
                        <span>Already have an account? <Link className='loginLink' to='/signup'>Sign Up</Link> </span>
                    </div>

                </form>
            </div>

        </div>
    )
}

export default SignIn
