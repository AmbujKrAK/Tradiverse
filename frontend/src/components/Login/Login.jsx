

import React from 'react';
import "./Login.css";
import  {Link}  from 'react-router-dom';

function Login() {
  return (
    <div className='login'>
        <form className='signupForm'>
            <div><h2>Sign in to your account</h2></div>
            <div>Email address</div>
            <input type="text" id="" placeholder='Enter Email' />
            <div>Password</div>
            <input type="text" placeholder='Password' />
            <div>
            <input type="submit" name="" id="" />
            </div>
        </form>
        <div>
            <div>Don't have an account?</div>
            <Link className='anchore' to="/">Create Account</Link>
        </div>
    </div>
  )
}

export default Login