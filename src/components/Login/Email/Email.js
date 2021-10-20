import { createUserWithEmailAndPassword, getAuth, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, updateProfile } from '@firebase/auth';
import React, { useState } from 'react';
import initializeAuthentication from '../Firebase/firebase.init';


initializeAuthentication();
//***************************Firebase Authentication Set-up*******************
const Email = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLogin, setIsLogin] = useState(false);

  const auth = getAuth();

//************************Toggle login 
  const toggleLogin = e => {
    setIsLogin(e.target.checked);

  }
  const handleNameChange = e => {
    setName(e.target.value);

  }

  const handleOnChange = e => {
    setEmail(e.target.value);
  }

  const handlePasswordChange = e => {
    setPassword(e.target.value);
  }

  const handleRegistration = e => {
    e.preventDefault();
    console.log(email, password);
    if (password.length < 6) {
      setError('Password Must be at least 6 Charecters')
      return;
    }
//*******************Password COndition*/
    if (!/(?=.*[a-z].*[a-z].*[a-z])/.test(password)) {
      setError('Password must contain 3 lower case ')
      return;
    }

    if (isLogin) {
      processLogin(email, password);
    }
    else {
      registerNewUSer(email, password);
    }
  }
  const processLogin = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then(result => {
        const user = result.user;
        console.log(user)
        setError('');
      })
      .catch(error => {
        setError(error.message)
      })

  }

  const registerNewUSer = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(result => {
        const user = result.user;
        console.log(user);
        setError('');
        verifyEmail();
        setUserName();

      })
      .catch(error => {
        setError(error.message);
      })
  }

  const handleResetPassword = () => {
    sendPasswordResetEmail(auth, email)
      .then(result => {

      })
  }

  const setUserName = () => {
    updateProfile(auth.currentUser, { display: name })
      .then(result => {

      })
  }
  const verifyEmail = () => {
    sendEmailVerification(auth.currentUser)
      .then(result => {
        console.log(result);

      })
  }

  return (
    //**********************Handle Button Section************************ 
    <div className="mx-5 px-5 py-5">
      <form onSubmit={handleRegistration}>
        <h1 className="text-primary"> Please {isLogin ? 'Login' : 'Register'} </h1>
        <div className="row mb-3">

          {!isLogin &&
            <div className="row mb-3">
              <label htmlFor="inputAddress" style={{color:'black', backgroundColor:'whitesmoke'}} className="form-label">Name</label>
              <input type="text" onBlur={handleNameChange} className="form-control" id="inputAddress" placeholder="Your Name" />
            </div>}

          <label htmlFor="inputEmail3" style={{color:'white'}} className="col-sm-2 col-form-label bg-secondary">Email</label>
          <div className="col-sm-10">
            <input onBlur={handleOnChange} type="email" className="form-control" id="inputEmail3 " required />
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="inputPassword3" style={{color:'white'}} className="col-sm-2 col-form-label bg-secondary">Password</label>
          <div className="col-sm-10">
            <input type="password" onBlur={handlePasswordChange} className="form-control" id="inputPassword3" required />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-sm-10 offset-sm-2">
            <div className="form-check">
              <input onChange={toggleLogin} className="form-check-input" type="checkbox" id="gridCheck1" />
              <label className="form-check-label" htmlFor="gridCheck1">
                Already Registered?
              </label>

            </div>
          </div>
        </div>
        <div className="row mb-3 text-danger ">
          {error}
        </div>
        <button type="submit" className="btn btn-primary mx-3"> {isLogin ? 'Login' : 'Register'}</button>
        <button type="button" onClick={handleResetPassword} className="btn btn-danger btn-sm p-2">Reset Password </button>
      </form>
    </div>
  );
};

export default Email;