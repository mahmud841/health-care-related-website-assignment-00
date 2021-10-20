import {getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged} from "firebase/auth";
import { useEffect, useState } from 'react';
import initializeAuthentication from '../components/Login/Firebase/firebase.init';

//******************* Function is called *****
initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  
  
// Always use this, don't forget 
  const auth = getAuth();

//***************************Google Sign In Coding***************
  const signInUsingGoogle = () => {
    setIsLoading(true)
    const googleProvider = new GoogleAuthProvider();
    signInWithPopup(auth, googleProvider)
      .then(result => {
        setUser(result.user);
      })
      .finally(() => setIsLoading(false));
  }
// Observeing user State Changing Showing  
  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, user => {
      if (user) {
        setUser(user)
      }
      else {
        setUser({})
      }
      setIsLoading(false);
    });
    return  () => unsubscribed;
  }, [])


  //***********Logout system ctreate  */
  const logOut = () => {
    setIsLoading(true)
    signOut(auth)
      .then(() => { })
      .finally(() => setIsLoading(false));
  }

  return {
    user,
    isLoading,
    signInUsingGoogle,
    logOut
  }

}

export default useFirebase;