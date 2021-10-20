import React, {  } from 'react';
import './Login.css';
import useAuth from '../../hooks/useAuth';
import login from '../../Images/login.jpg';
import initializeAuthentication from './Firebase/firebase.init';
import Email from './Email/Email';


initializeAuthentication();
const Login = () => {
  <Email></Email>


  const { signInUsingGoogle } = useAuth()
  return (
    <div>
      <div>
        <h2 style={{color:'red',fontStyle:'italic'}}>This is Login Field</h2>
        <div className="firebase-button">
          <button style={{fontStyle:'italic'}} onClick={signInUsingGoogle} className="btn google-button">Sign-In with Google</button>
        </div>

        <div className="col-md-6">
          <div className="login-icon">
            <img src={login} alt="" />
          </div>
        </div>
      </div>
    </div>


  );
};

export default Login;