import React, { useState } from 'react'
import './Login.css'
import logo from '../../assets/logo.png'
import { login, signup } from '../../firebase'

const Login = () => {

  const [signState, setSignState] = useState("Sign In") //initial state is SignIn and this is for switching state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const user_auth = async(event) => {
    event.preventDefault();

    if(signState === "Sign In"){
      await login(email, password);
    }else{
      await signup(name, email, password);
    }
  }

  return (
    <div className='login'>
      <img src={logo} alt="" className='login-logo' />
      <div className="login-form">
        <h1>{signState}</h1>
        <form> 
          {/*it will check what the state is anb it will show or hide the name input field*/}
          {signState==="Sign Up" ? <input value={name} onChange={(e) => {
            setName(e.target.value)
            }} type="text" placeholder='Your name' /> : <></>}
          
          <input value={email} onChange={(e) => {
            setEmail(e.target.value)
            }} type="email" placeholder='Your email' />

          <input value={password} onChange={(e) => {
            setPassword(e.target.value)
            }} type="password" placeholder='Password' />

          <button onClick={user_auth} type='submit'>{signState}</button>

          <div className="form-help">
            <div className="remember">
              <input type="checkbox" />
              <label htmlFor="">Remember me</label>
            </div>
            <p>Need Help?</p>
          </div>
        </form>

        <div className="form-switch">
          {/*it will check what the state is anb it will show or hide the text fields*/}
          {signState==="Sign In" ? <p>New To Netflix? <span onClick={() => {setSignState("Sign Up")}}>Sign Up Now</span></p> : 
            <p>Already have account? <span onClick={() => {setSignState("Sign In")}}>Sign In Now</span></p>}          
          
        </div>
      </div>
    </div>
  )
}

export default Login
