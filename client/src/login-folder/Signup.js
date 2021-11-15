import React, { useState } from 'react'
import { useHistory, Link } from 'react-router-dom'

export default function Signup({ setCurrentUser }) {
    const history = useHistory()
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()
        fetch('/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password })
        })
            .then(res => {
                if (res.ok) {
                    res.json().then(user => {
                        setCurrentUser(user)
                        history.push('/home')
                    })
                } else {
                    res.json().then(errors => {
                        console.error(errors)
                    })
                }
            })
    }

    return (
        <div className='login-page'>
            <div className='login-info'>
                <h1>Welcome to T-vollage</h1>
            </div>
            <div className='login-form-container'>
                <h1 className='login-h1'>Sign up</h1>
                <form className='login-form' onSubmit={handleSubmit}>
                    <span>Username: </span>
                    <input placeholder='Username..' value={username} name="username" required onChange={(e) => setUsername(e.target.value)} />
                    <span>Password: </span>
                    <input type="password" placeholder="Password.." required onChange={(e) => setPassword(e.target.value)} />
                    <button type='submit'>Sign up</button>
                </form>
                <p>Already have an account? Click <Link to='/login' style={{ textDecoration: 'none' }}><span>here</span></Link> to log in.</p>
            </div>
        </div>
    )
}