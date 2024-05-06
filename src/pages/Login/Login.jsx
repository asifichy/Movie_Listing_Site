import React, { useState } from 'react'
import './Login.css'
import logo from '../../assets/logo.png'

const Login = () => {

  const [signState, setSignState] = useState("Sign In") //initial state is SignIn and this is for switching state

  return (
    <div className='login'>
      <img src={logo} alt="" className='login-logo' />
      <div className="login-form">
        <h1>Sign Up</h1>
        <form>
          <input type="text" placeholder='Your name' />
          <input type="email" placeholder='Your email' />
          <input type="password" placeholder='password' />
          <button>Sign Up</button>

          <div className="form-help">
            <div className="remember">
              <input type="checkbox" />
              <label htmlFor="">Remember me</label>
            </div>
            <p>Need Help?</p>
          </div>
        </form>

        <div className="form-switch">
          <p>New To Netflix? <span>Sign Up Now</span></p>
          <p>Already have account? <span>Sign In Now</span></p>
        </div>
      </div>
    </div>
  )
}

export default Login
