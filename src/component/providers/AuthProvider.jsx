import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from "../firebase/firebase.config";

export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)

  const googleProvider = new GoogleAuthProvider()

  const singUpWithGoogle =()=>{
    return signInWithPopup(auth,googleProvider)
  }

  const createUser = (email, password) => {
    //loading(true)
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const signInUser = (email, password) => {

    return signInWithEmailAndPassword(auth, email, password)
  }
  const logOut=()=>{
   
    return signOut(auth);
  }
  /* using use effect to hold user data */
  useEffect(()=>{
    const unSubscribe = onAuthStateChanged(auth, currentUser=>{
      setUser(currentUser);
      console.log('Observing current user inside useEffect', currentUser)
    });
    return ()=>{
      unSubscribe()
    }
  },[])
  const authInfo = { user, createUser, signInUser,logOut ,singUpWithGoogle}


  return (
    <div>
      <AuthContext.Provider value={authInfo}>
        {children}
      </AuthContext.Provider>
    </div>
  );
};
AuthProvider.propTypes = {
  children: PropTypes.node
}
export default AuthProvider;