/** @format */

import React, { useState } from "react";
import Logo from "../../img/Logo.png";
import "./Auth.css";
import { Link } from "react-router-dom";
const Auth = () => {
  const [login, setLogin] = useState(true);
  return (
    <div className='Auth'>
      <div className='auth-left'>
        <img src={Logo} alt='' />
        <div className='web-name'>
          <h1>INSMY Social Network</h1>
          <h3>Explore the world in your eyes</h3>
        </div>
      </div>
      {login ? (
        <Login changeLoginStatus={() => setLogin(!login)} />
      ) : (
        <SignUp changeLoginStatus={() => setLogin(!login)} />
      )}
    </div>
  );
};
function Login({ changeLoginStatus }) {
  return (
    <div className='auth-right'>
      <form action='' className='authForm'>
        <h2>Log In</h2>
        <div>
          <input
            type='text'
            placeholder='Username'
            className='infoInput'
            name='username'
          />
        </div>
        <div>
          <input
            type='text'
            placeholder='Password'
            className='infoInput'
            name='password'
          />
        </div>
        <Link to='/home'>
            <button className='button su-btn'>Log In</button>
        </Link>
        <div>
            
          <span
            className='link-botton-form'
            onClick={() => changeLoginStatus()}>
            Don't have an account. SIGN UP
          </span>
        </div>
      </form>
    </div>
  );
}
function SignUp({ changeLoginStatus }) {
  return (
    <div className='auth-right'>
      <form action='' className='authForm'>
        <h2>Sign Up</h2>
        <div>
          <input
            type='text'
            placeholder='First Name'
            className='infoInput'
            name='firstname'
          />
          <input
            type='text'
            placeholder='Last Name'
            className='infoInput'
            name='lastname'
          />
        </div>
        <div>
          <input
            type='text'
            placeholder='Username'
            className='infoInput'
            name='username'
          />
        </div>
        <div>
          <input
            type='text'
            placeholder='Password'
            className='infoInput'
            name='password'
          />
          <input
            type='text'
            placeholder='Confirm Password'
            className='infoInput'
            name='confirmpassword'
          />
        </div>
        <Link to='/home'>
            <button className='button su-btn'>Sign Up</button>
        </Link>
        <div>
          <span
            className='link-botton-form'
            onClick={() => changeLoginStatus()}>
            Already have an account. LOG IN
          </span>
        </div>
      </form>
    </div>
  );
}

export default Auth;
