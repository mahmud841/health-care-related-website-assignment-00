import React from 'react';
import './Login.css';
import useAuth from '../../hooks/useAuth';
import login from '../../Images/login.jpg'

const Login = () => {
  const {signInUsingGoogle} = useAuth()
  return (
    <div>
      <h2>This is Login Field</h2>
      <div className="firebase-button">
      <button onClick={signInUsingGoogle} className="btn google-button">Sign-In with Google</button>
      </div>

      <div className="col-md-6">
        <div className="login-icon">
          <img src={login} alt="" />
        </div>
      </div>
    </div>
    
  );
};

export default Login;