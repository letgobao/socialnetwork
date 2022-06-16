/** @format */

import React, { useState } from "react";
import Logo from "../../img/Logo.png";
import "./Auth.css";
import { useDispatch, useSelector } from "react-redux";
import { logIn, signUp } from "../../actions/AuthAction";
const Auth = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [userData, setUserData] = useState({
    firstname: "",
    lastname: "",
    password: "",
    confirmpassword: "",
    username: "",
  });

  const [confirm, setConfirm] = useState(true);
  const dispatch = useDispatch();
  const loading = useSelector((state)=> state.authReducer.loading)
  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (isSignUp) {
      userData.confirmpassword === userData.password
        ? dispatch(signUp(userData))
        : setConfirm(false);
    } else {
      dispatch(logIn(userData))
    }
  };
  const resetPage = () => {
    setConfirm(true);
    setUserData({
      firstname: "",
      lastname: "",
      password: "",
      confirmpassword: "",
      username: "",
    });
  };
  return (
    <div className='Auth'>
      <div className='auth-left'>
        <img src={Logo} alt='' />
        <div className='web-name'>
          <h1>INSMY Social Network</h1>
          <h3>Explore the world in your eyes</h3>
        </div>
      </div>
      <div className='auth-right'>
        <form action='' className='authForm' onSubmit={handleSubmit}>
          <h2>{isSignUp ? "Sign Up" : "Log In"}</h2>
          {isSignUp && (
            <div>
              <input
                type='text'
                placeholder='First Name'
                className='infoInput'
                name='firstname'
                onChange={handleChange}
                value={userData.firstname}
              />
              <input
                type='text'
                placeholder='Last Name'
                className='infoInput'
                name='lastname'
                onChange={handleChange}
                value={userData.lastname}
              />
            </div>
          )}
          <div>
            <input
              type='text'
              placeholder='Username'
              className='infoInput'
              name='username'
              onChange={handleChange}
              value={userData.username}
            />
          </div>
          <div>
            <input
              type='password'
              placeholder='Password'
              className='infoInput'
              name='password'
              onChange={handleChange}
              value={userData.password}
            />
            {isSignUp && (
              <input
                type='password'
                placeholder='Confirm Password'
                className='infoInput'
                name='confirmpassword'
                onChange={handleChange}
                value={userData.confirmpassword}
              />
            )}
          </div>
          <span
            style={{
              color: "red",
              display: confirm ? "none" : "block",
              fontSize: "12px",
            }}>
            * Confirm password is not same
          </span>
          <button className='button su-btn' type='submit' disabled={loading}>
            {loading ? "Loading..." : isSignUp ? "Sign Up" : "Log In"}
          </button>
          <div>
            <span
              className='link-botton-form'
              onClick={() => {
                setIsSignUp(!isSignUp);
                resetPage();
              }}>
              {isSignUp
                ? "Already have an account. LOG IN"
                : " Do not have an account. SIGN UP"}
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Auth;
