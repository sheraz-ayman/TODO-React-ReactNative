import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <div>
        <h1>Login</h1>
        <p>don't have an acoount <Link to="/register">register</Link> now!</p>
    </div>
  )
}

export default Login