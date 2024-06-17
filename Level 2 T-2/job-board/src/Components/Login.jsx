import React from 'react'
import { GoogleAuthProvider,signInWithPopup } from "firebase/auth";
import { getAuth } from "firebase/auth";
import app from '../Firebase/firebase.config';
const Login = () => {
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();
  const handlelogin = () => {
    signInWithPopup(auth, googleProvider).then((result) => {
      const user = result.user;
      console.log(user);
    }).catch((error) => {
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
  }
  return (
    <div className='h-screen w-full flex items-center justify-center'>
      <button onClick={handlelogin}>Login</button>
    </div> 
  ) 
}

export default Login