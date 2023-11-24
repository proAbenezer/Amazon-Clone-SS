import React, { useState } from 'react'

//React-Router-Dom Hooks
import { Link, useNavigate } from 'react-router-dom'

//Login Styles
import './Login.css'


//Firebase Auth
import { auth } from '../../Firebase/Firebase'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'

function Login() {
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')



    const login = (e) => {
        e.preventDefault()
        signInWithEmailAndPassword(auth, email, password)
            .then((auth) => {
                navigate('/')
            }).catch(e => alert(e.message))

    }

    const register = e => {
        e.preventDefault()
        createUserWithEmailAndPassword(auth, email, password)
            .then((auth) => {
                navigate('/')
            }).catch(e => alert(e.message))
    }
    return (
        <div className='login'>
            <Link to='/'>
                <img
                    className='login__logo'
                    src="https://www.shutterstock.com/image-vector/amazon-logo-editorial-icon-isolated-260nw-2313339121.jpg"
                    alt="amazon login page"
                />
            </Link>

            <div className="login__container">
                <h1>Sign In</h1>
                <form className="login__form">

                    <label htmlFor="email">Email</label>
                    <input
                        value={email}
                        onChange={event => setEmail(event.target.value)}
                        id='email'
                        type="email"
                        placeholder='Your Email'
                    />
                    <label htmlFor="password">Password</label>
                    <input
                        value={password}
                        onChange={event => setPassword(event.target.value)}
                        id="password"
                        type="password"
                        placeholder='Your Password'
                    />

                    <button
                        type='submit'
                        onClick={login}
                        className='login__signIn--button'
                    >Sign In </button>
                </form>
                <p>
                    By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.
                </p>
                <button
                    onClick={register}
                    className='login__register--button'
                >Create Your Amazon Account</button>
            </div>
        </div>
    )
}

export default Login

